from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelFileUploadViaSharePathParams:
    access_key: str = field(metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    upload_id: str = field(metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelFileUploadViaShareRequest:
    path_params: CancelFileUploadViaSharePathParams = field()
    

@dataclass
class CancelFileUploadViaShareResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
