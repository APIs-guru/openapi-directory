from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FunctionsListExecutionsPathParams:
    function_id: str = field(default=None, metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FunctionsListExecutionsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderType', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class FunctionsListExecutionsSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsListExecutionsRequest:
    path_params: FunctionsListExecutionsPathParams = field(default=None)
    query_params: FunctionsListExecutionsQueryParams = field(default=None)
    security: FunctionsListExecutionsSecurity = field(default=None)
    

@dataclass
class FunctionsListExecutionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    execution_list: Optional[shared.ExecutionList] = field(default=None)
    
