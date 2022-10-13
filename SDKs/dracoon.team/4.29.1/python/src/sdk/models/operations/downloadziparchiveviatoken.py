from dataclasses import dataclass, field



@dataclass
class DownloadZipArchiveViaTokenPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadZipArchiveViaTokenRequest:
    path_params: DownloadZipArchiveViaTokenPathParams = field(default=None)
    

@dataclass
class DownloadZipArchiveViaTokenResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
