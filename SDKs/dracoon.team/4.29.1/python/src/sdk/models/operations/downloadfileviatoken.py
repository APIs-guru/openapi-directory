from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DownloadFileViaTokenPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileViaTokenQueryParams:
    generic_mimetype: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'generic_mimetype', 'style': 'form', 'explode': True }})
    inline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inline', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadFileViaTokenHeaders:
    range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileViaTokenRequest:
    headers: DownloadFileViaTokenHeaders = field()
    path_params: DownloadFileViaTokenPathParams = field()
    query_params: DownloadFileViaTokenQueryParams = field()
    

@dataclass
class DownloadFileViaTokenResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
