from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FunctionsListTagsPathParams:
    function_id: str = field(default=None, metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FunctionsListTagsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderType', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class FunctionsListTagsSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsListTagsRequest:
    path_params: FunctionsListTagsPathParams = field(default=None)
    query_params: FunctionsListTagsQueryParams = field(default=None)
    security: FunctionsListTagsSecurity = field(default=None)
    

@dataclass
class FunctionsListTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_list: Optional[shared.TagList] = field(default=None)
    
