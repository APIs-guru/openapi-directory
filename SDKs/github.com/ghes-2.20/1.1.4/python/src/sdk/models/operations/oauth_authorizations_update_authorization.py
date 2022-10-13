from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class OauthAuthorizationsUpdateAuthorizationPathParams:
    authorization_id: int = field(default=None, metadata={'path_param': { 'field_name': 'authorization_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OauthAuthorizationsUpdateAuthorizationRequestBody:
    add_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_scopes' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    note_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note_url' }})
    remove_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remove_scopes' }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    

@dataclass
class OauthAuthorizationsUpdateAuthorizationRequest:
    path_params: OauthAuthorizationsUpdateAuthorizationPathParams = field(default=None)
    request: Optional[OauthAuthorizationsUpdateAuthorizationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OauthAuthorizationsUpdateAuthorizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authorization: Optional[shared.Authorization] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
