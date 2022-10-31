from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DownloadFilePathParams:
    file_id: int = field(default=None, metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

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
    path_params: DownloadFilePathParams = field(default=None)
    query_params: DownloadFileQueryParams = field(default=None)
    headers: DownloadFileHeaders = field(default=None)
    

@dataclass
class DownloadFileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
