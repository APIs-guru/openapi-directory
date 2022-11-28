from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DownloadFile1PathParams:
    file_id: int = field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFile1QueryParams:
    generic_mimetype: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'generic_mimetype', 'style': 'form', 'explode': True }})
    inline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inline', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadFile1Headers:
    range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFile1Request:
    headers: DownloadFile1Headers = field()
    path_params: DownloadFile1PathParams = field()
    query_params: DownloadFile1QueryParams = field()
    

@dataclass
class DownloadFile1Response:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
