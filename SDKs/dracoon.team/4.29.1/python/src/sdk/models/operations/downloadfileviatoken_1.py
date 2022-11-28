from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DownloadFileViaToken1PathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileViaToken1QueryParams:
    generic_mimetype: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'generic_mimetype', 'style': 'form', 'explode': True }})
    inline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inline', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadFileViaToken1Headers:
    range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileViaToken1Request:
    headers: DownloadFileViaToken1Headers = field()
    path_params: DownloadFileViaToken1PathParams = field()
    query_params: DownloadFileViaToken1QueryParams = field()
    

@dataclass
class DownloadFileViaToken1Response:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
