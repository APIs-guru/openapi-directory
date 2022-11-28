from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelFileUploadByTokenPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelFileUploadByTokenRequest:
    path_params: CancelFileUploadByTokenPathParams = field()
    

@dataclass
class CancelFileUploadByTokenResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
