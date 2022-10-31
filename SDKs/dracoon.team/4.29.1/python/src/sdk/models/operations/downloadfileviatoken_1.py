from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DownloadFileViaToken1PathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileViaToken1QueryParams:
    generic_mimetype: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'generic_mimetype', 'style': 'form', 'explode': True }})
    inline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inline', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadFileViaToken1Headers:
    range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileViaToken1Request:
    path_params: DownloadFileViaToken1PathParams = field(default=None)
    query_params: DownloadFileViaToken1QueryParams = field(default=None)
    headers: DownloadFileViaToken1Headers = field(default=None)
    

@dataclass
class DownloadFileViaToken1Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
