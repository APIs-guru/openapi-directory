from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FolderListForPathPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class FolderListForPathQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    preview_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'preview_size', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    search_all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'search_all', 'style': 'form', 'explode': True }})
    with_previews: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'with_previews', 'style': 'form', 'explode': True }})
    with_priority_color: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'with_priority_color', 'style': 'form', 'explode': True }})
    

@dataclass
class FolderListForPathRequest:
    path_params: FolderListForPathPathParams = field()
    query_params: FolderListForPathQueryParams = field()
    

@dataclass
class FolderListForPathResponse:
    content_type: str = field()
    status_code: int = field()
    file_entities: Optional[List[shared.FileEntity]] = field(default=None)
    
