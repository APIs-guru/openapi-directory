from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelFileUploadByTokenPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelFileUploadByTokenRequest:
    path_params: CancelFileUploadByTokenPathParams = field(default=None)
    

@dataclass
class CancelFileUploadByTokenResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
