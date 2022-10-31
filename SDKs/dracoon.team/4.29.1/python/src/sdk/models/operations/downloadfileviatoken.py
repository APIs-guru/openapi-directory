from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DownloadFileViaTokenPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileViaTokenQueryParams:
    generic_mimetype: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'generic_mimetype', 'style': 'form', 'explode': True }})
    inline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inline', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadFileViaTokenHeaders:
    range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileViaTokenRequest:
    path_params: DownloadFileViaTokenPathParams = field(default=None)
    query_params: DownloadFileViaTokenQueryParams = field(default=None)
    headers: DownloadFileViaTokenHeaders = field(default=None)
    

@dataclass
class DownloadFileViaTokenResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
