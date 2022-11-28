from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DownloadZipArchiveHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadZipArchiveRequest:
    headers: DownloadZipArchiveHeaders = field()
    request: shared.ZipDownloadRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DownloadZipArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
