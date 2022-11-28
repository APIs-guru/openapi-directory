from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetPresenceQueryParams:
    user_ids: List[str] = field(metadata={'query_param': { 'field_name': 'userIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPresenceSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPresenceRequest:
    query_params: GetPresenceQueryParams = field()
    security: GetPresenceSecurity = field()
    

@dataclass
class GetPresenceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    presences: Optional[List[Any]] = field(default=None)
    
