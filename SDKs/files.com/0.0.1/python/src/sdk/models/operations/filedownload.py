from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FileDownloadPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class FileDownloadQueryParams:
    action: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    preview_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'preview_size', 'style': 'form', 'explode': True }})
    with_previews: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'with_previews', 'style': 'form', 'explode': True }})
    with_priority_color: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'with_priority_color', 'style': 'form', 'explode': True }})
    

@dataclass
class FileDownloadRequest:
    path_params: FileDownloadPathParams = field(default=None)
    query_params: FileDownloadQueryParams = field(default=None)
    

@dataclass
class FileDownloadResponse:
    content_type: str = field(default=None)
    file_entity: Optional[shared.FileEntity] = field(default=None)
    status_code: int = field(default=None)
    
