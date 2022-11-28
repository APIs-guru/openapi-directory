from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FunctionsListTagsPathParams:
    function_id: str = field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FunctionsListTagsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderType', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class FunctionsListTagsSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsListTagsRequest:
    path_params: FunctionsListTagsPathParams = field()
    query_params: FunctionsListTagsQueryParams = field()
    security: FunctionsListTagsSecurity = field()
    

@dataclass
class FunctionsListTagsResponse:
    content_type: str = field()
    status_code: int = field()
    tag_list: Optional[shared.TagList] = field(default=None)
    
