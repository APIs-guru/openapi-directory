from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenerateDownloadURLPathParams:
    file_id: int = field(default=None, metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenerateDownloadURLHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenerateDownloadURLRequest:
    path_params: GenerateDownloadURLPathParams = field(default=None)
    headers: GenerateDownloadURLHeaders = field(default=None)
    

@dataclass
class GenerateDownloadURLResponse:
    content_type: str = field(default=None)
    download_token_generate_response: Optional[shared.DownloadTokenGenerateResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
