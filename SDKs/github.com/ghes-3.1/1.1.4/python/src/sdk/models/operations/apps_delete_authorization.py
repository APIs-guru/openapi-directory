from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AppsDeleteAuthorizationPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppsDeleteAuthorizationRequestBody:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    

@dataclass
class AppsDeleteAuthorizationRequest:
    path_params: AppsDeleteAuthorizationPathParams = field(default=None)
    request: Optional[AppsDeleteAuthorizationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppsDeleteAuthorizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
