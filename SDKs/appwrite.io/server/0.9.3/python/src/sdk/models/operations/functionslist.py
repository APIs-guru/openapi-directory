from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FunctionsListQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderType', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class FunctionsListSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsListRequest:
    query_params: FunctionsListQueryParams = field(default=None)
    security: FunctionsListSecurity = field(default=None)
    

@dataclass
class FunctionsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    function_list: Optional[shared.FunctionList] = field(default=None)
    
