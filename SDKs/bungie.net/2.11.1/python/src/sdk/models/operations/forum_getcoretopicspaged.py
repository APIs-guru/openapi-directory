from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ForumGetCoreTopicsPagedPathParams:
    category_filter: int = field(metadata={'path_param': { 'field_name': 'categoryFilter', 'style': 'simple', 'explode': False }})
    page: int = field(metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})
    quick_date: int = field(metadata={'path_param': { 'field_name': 'quickDate', 'style': 'simple', 'explode': False }})
    sort: int = field(metadata={'path_param': { 'field_name': 'sort', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForumGetCoreTopicsPagedQueryParams:
    locales: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locales', 'style': 'form', 'explode': True }})
    

@dataclass
class ForumGetCoreTopicsPagedRequest:
    path_params: ForumGetCoreTopicsPagedPathParams = field()
    query_params: ForumGetCoreTopicsPagedQueryParams = field()
    

@dataclass
class ForumGetCoreTopicsPagedResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
