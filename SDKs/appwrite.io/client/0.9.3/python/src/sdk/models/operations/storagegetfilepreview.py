from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StorageGetFilePreviewPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageGetFilePreviewQueryParams:
    background: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'background', 'style': 'form', 'explode': True }})
    border_color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'borderColor', 'style': 'form', 'explode': True }})
    border_radius: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'borderRadius', 'style': 'form', 'explode': True }})
    border_width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'borderWidth', 'style': 'form', 'explode': True }})
    gravity: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'gravity', 'style': 'form', 'explode': True }})
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    opacity: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'opacity', 'style': 'form', 'explode': True }})
    output: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'output', 'style': 'form', 'explode': True }})
    quality: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    rotation: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rotation', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageGetFilePreviewSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StorageGetFilePreviewRequest:
    path_params: StorageGetFilePreviewPathParams = field()
    query_params: StorageGetFilePreviewQueryParams = field()
    security: StorageGetFilePreviewSecurity = field()
    

@dataclass
class StorageGetFilePreviewResponse:
    content_type: str = field()
    status_code: int = field()
    
