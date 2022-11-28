from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DownloadZipArchiveViaTokenPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadZipArchiveViaTokenRequest:
    path_params: DownloadZipArchiveViaTokenPathParams = field()
    

@dataclass
class DownloadZipArchiveViaTokenResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
