from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DownloadZipArchiveHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class DownloadZipArchiveRequest:
    headers: DownloadZipArchiveHeaders = field(default=None)
    request: shared.ZipDownloadRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DownloadZipArchiveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
