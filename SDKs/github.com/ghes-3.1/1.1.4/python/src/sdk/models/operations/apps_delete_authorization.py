from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AppsDeleteAuthorizationPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppsDeleteAuthorizationRequestBody:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    

@dataclass
class AppsDeleteAuthorizationRequest:
    path_params: AppsDeleteAuthorizationPathParams = field()
    request: Optional[AppsDeleteAuthorizationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppsDeleteAuthorizationResponse:
    content_type: str = field()
    status_code: int = field()
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
