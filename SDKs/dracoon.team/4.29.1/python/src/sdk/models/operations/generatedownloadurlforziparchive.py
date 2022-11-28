from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenerateDownloadURLForZipArchiveHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenerateDownloadURLForZipArchiveRequest:
    headers: GenerateDownloadURLForZipArchiveHeaders = field()
    request: shared.ZipDownloadRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenerateDownloadURLForZipArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    download_token_generate_response: Optional[shared.DownloadTokenGenerateResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
