from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AppsDeleteTokenPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppsDeleteTokenRequestBody:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    

@dataclass
class AppsDeleteTokenRequest:
    path_params: AppsDeleteTokenPathParams = field(default=None)
    request: Optional[AppsDeleteTokenRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppsDeleteTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
