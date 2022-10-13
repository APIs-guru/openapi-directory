from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ForumGetCoreTopicsPagedPathParams:
    category_filter: int = field(default=None, metadata={'path_param': { 'field_name': 'categoryFilter', 'style': 'simple', 'explode': False }})
    page: int = field(default=None, metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})
    quick_date: int = field(default=None, metadata={'path_param': { 'field_name': 'quickDate', 'style': 'simple', 'explode': False }})
    sort: int = field(default=None, metadata={'path_param': { 'field_name': 'sort', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForumGetCoreTopicsPagedQueryParams:
    locales: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locales', 'style': 'form', 'explode': True }})
    

@dataclass
class ForumGetCoreTopicsPagedRequest:
    path_params: ForumGetCoreTopicsPagedPathParams = field(default=None)
    query_params: ForumGetCoreTopicsPagedQueryParams = field(default=None)
    

@dataclass
class ForumGetCoreTopicsPagedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
