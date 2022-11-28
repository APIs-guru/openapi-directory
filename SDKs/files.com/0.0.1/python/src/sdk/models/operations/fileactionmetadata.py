from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FileActionMetadataPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class FileActionMetadataQueryParams:
    preview_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'preview_size', 'style': 'form', 'explode': True }})
    with_previews: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'with_previews', 'style': 'form', 'explode': True }})
    with_priority_color: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'with_priority_color', 'style': 'form', 'explode': True }})
    

@dataclass
class FileActionMetadataRequest:
    path_params: FileActionMetadataPathParams = field()
    query_params: FileActionMetadataQueryParams = field()
    

@dataclass
class FileActionMetadataResponse:
    content_type: str = field()
    status_code: int = field()
    file_entity: Optional[shared.FileEntity] = field(default=None)
    
