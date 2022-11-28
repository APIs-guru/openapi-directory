from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class WorkTypeAPISearchQueryOptionsOrderEnum(str, Enum):
    NONE = "None"
    ASC = "Asc"
    DESC = "Desc"


@dataclass
class WorkTypeAPISearchQueryParams:
    query_options_order: Optional[WorkTypeAPISearchQueryOptionsOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'queryOptions.order', 'style': 'form', 'explode': True }})
    query_options_order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'queryOptions.orderBy', 'style': 'form', 'explode': True }})
    query_options_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'queryOptions.page', 'style': 'form', 'explode': True }})
    query_options_page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'queryOptions.pageSize', 'style': 'form', 'explode': True }})
    query_options_query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'queryOptions.query', 'style': 'form', 'explode': True }})
    

@dataclass
class WorkTypeAPISearchHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class WorkTypeAPISearchRequest:
    headers: WorkTypeAPISearchHeaders = field()
    query_params: WorkTypeAPISearchQueryParams = field()
    

@dataclass
class WorkTypeAPISearchResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    work_type_details_api_models: Optional[List[shared.WorkTypeDetailsAPIModel]] = field(default=None)
    
