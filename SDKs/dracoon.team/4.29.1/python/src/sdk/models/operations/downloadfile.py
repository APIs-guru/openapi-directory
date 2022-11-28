from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DownloadFilePathParams:
    file_id: int = field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileQueryParams:
    generic_mimetype: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'generic_mimetype', 'style': 'form', 'explode': True }})
    inline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inline', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadFileHeaders:
    range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileRequest:
    headers: DownloadFileHeaders = field()
    path_params: DownloadFilePathParams = field()
    query_params: DownloadFileQueryParams = field()
    

@dataclass
class DownloadFileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
