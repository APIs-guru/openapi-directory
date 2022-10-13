from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelFileUploadViaSharePathParams:
    access_key: str = field(default=None, metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    upload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelFileUploadViaShareRequest:
    path_params: CancelFileUploadViaSharePathParams = field(default=None)
    

@dataclass
class CancelFileUploadViaShareResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
