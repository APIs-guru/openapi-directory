from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DownloadFileViaTokenPublicPathParams:
    access_key: str = field(default=None, metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileViaTokenPublicQueryParams:
    generic_mimetype: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'generic_mimetype', 'style': 'form', 'explode': True }})
    inline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inline', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadFileViaTokenPublicHeaders:
    range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileViaTokenPublicRequest:
    path_params: DownloadFileViaTokenPublicPathParams = field(default=None)
    query_params: DownloadFileViaTokenPublicQueryParams = field(default=None)
    headers: DownloadFileViaTokenPublicHeaders = field(default=None)
    

@dataclass
class DownloadFileViaTokenPublicResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
