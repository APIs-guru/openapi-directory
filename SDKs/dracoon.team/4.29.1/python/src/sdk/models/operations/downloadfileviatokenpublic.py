from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DownloadFileViaTokenPublicPathParams:
    access_key: str = field(metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileViaTokenPublicQueryParams:
    generic_mimetype: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'generic_mimetype', 'style': 'form', 'explode': True }})
    inline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inline', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadFileViaTokenPublicHeaders:
    range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileViaTokenPublicRequest:
    headers: DownloadFileViaTokenPublicHeaders = field()
    path_params: DownloadFileViaTokenPublicPathParams = field()
    query_params: DownloadFileViaTokenPublicQueryParams = field()
    

@dataclass
class DownloadFileViaTokenPublicResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
