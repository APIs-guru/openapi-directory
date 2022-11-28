from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AppsDeleteTokenPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppsDeleteTokenRequestBody:
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    

@dataclass
class AppsDeleteTokenRequest:
    path_params: AppsDeleteTokenPathParams = field()
    request: Optional[AppsDeleteTokenRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppsDeleteTokenResponse:
    content_type: str = field()
    status_code: int = field()
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
