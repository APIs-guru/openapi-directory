from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AppsResetTokenPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppsResetTokenRequestBody:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    

@dataclass
class AppsResetTokenRequest:
    path_params: AppsResetTokenPathParams = field(default=None)
    request: Optional[AppsResetTokenRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppsResetTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authorization: Optional[shared.Authorization] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
