from dataclasses import dataclass, field
from typing import Enum,List,Optional
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
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class WorkTypeAPISearchRequest:
    query_params: WorkTypeAPISearchQueryParams = field(default=None)
    headers: WorkTypeAPISearchHeaders = field(default=None)
    

@dataclass
class WorkTypeAPISearchResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    work_type_details_api_models: Optional[List[shared.WorkTypeDetailsAPIModel]] = field(default=None)
    
