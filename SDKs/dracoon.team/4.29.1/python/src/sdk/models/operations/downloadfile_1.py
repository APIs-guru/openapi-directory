from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DownloadFile1PathParams:
    file_id: int = field(default=None, metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFile1QueryParams:
    generic_mimetype: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'generic_mimetype', 'style': 'form', 'explode': True }})
    inline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inline', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadFile1Headers:
    range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Range' }})
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class DownloadFile1Request:
    path_params: DownloadFile1PathParams = field(default=None)
    query_params: DownloadFile1QueryParams = field(default=None)
    headers: DownloadFile1Headers = field(default=None)
    

@dataclass
class DownloadFile1Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
