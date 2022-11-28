from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ForumGetTopicsPagedPathParams:
    category_filter: int = field(metadata={'path_param': { 'field_name': 'categoryFilter', 'style': 'simple', 'explode': False }})
    group: int = field(metadata={'path_param': { 'field_name': 'group', 'style': 'simple', 'explode': False }})
    page: int = field(metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})
    page_size: int = field(metadata={'path_param': { 'field_name': 'pageSize', 'style': 'simple', 'explode': False }})
    quick_date: int = field(metadata={'path_param': { 'field_name': 'quickDate', 'style': 'simple', 'explode': False }})
    sort: int = field(metadata={'path_param': { 'field_name': 'sort', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForumGetTopicsPagedQueryParams:
    locales: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locales', 'style': 'form', 'explode': True }})
    tagstring: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tagstring', 'style': 'form', 'explode': True }})
    

@dataclass
class ForumGetTopicsPagedRequest:
    path_params: ForumGetTopicsPagedPathParams = field()
    query_params: ForumGetTopicsPagedQueryParams = field()
    

@dataclass
class ForumGetTopicsPagedResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
