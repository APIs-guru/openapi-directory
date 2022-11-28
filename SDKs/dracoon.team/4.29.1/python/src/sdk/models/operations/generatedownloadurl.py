from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenerateDownloadURLPathParams:
    file_id: int = field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenerateDownloadURLHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenerateDownloadURLRequest:
    headers: GenerateDownloadURLHeaders = field()
    path_params: GenerateDownloadURLPathParams = field()
    

@dataclass
class GenerateDownloadURLResponse:
    content_type: str = field()
    status_code: int = field()
    download_token_generate_response: Optional[shared.DownloadTokenGenerateResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
