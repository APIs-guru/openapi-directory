from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DownloadFileViaTokenPublic1PathParams:
    access_key: str = field(default=None, metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileViaTokenPublic1QueryParams:
    generic_mimetype: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'generic_mimetype', 'style': 'form', 'explode': True }})
    inline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inline', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadFileViaTokenPublic1Headers:
    range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileViaTokenPublic1Request:
    path_params: DownloadFileViaTokenPublic1PathParams = field(default=None)
    query_params: DownloadFileViaTokenPublic1QueryParams = field(default=None)
    headers: DownloadFileViaTokenPublic1Headers = field(default=None)
    

@dataclass
class DownloadFileViaTokenPublic1Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
