from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PutAbusesAbuseIDPathParams:
    abuse_id: int = field(default=None, metadata={'path_param': { 'field_name': 'abuseId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutAbusesAbuseIDRequestBody:
    moderation_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderationComment' }})
    state: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass
class PutAbusesAbuseIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutAbusesAbuseIDRequest:
    path_params: PutAbusesAbuseIDPathParams = field(default=None)
    request: Optional[PutAbusesAbuseIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutAbusesAbuseIDSecurity = field(default=None)
    

@dataclass
class PutAbusesAbuseIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
