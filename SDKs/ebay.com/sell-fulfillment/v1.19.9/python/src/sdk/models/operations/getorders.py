from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOrdersQueryParams:
    field_groups: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fieldGroups', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrdersSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetOrdersRequest:
    query_params: GetOrdersQueryParams = field(default=None)
    security: GetOrdersSecurity = field(default=None)
    

@dataclass
class GetOrdersResponse:
    content_type: str = field(default=None)
    order_search_paged_collection: Optional[shared.OrderSearchPagedCollection] = field(default=None)
    status_code: int = field(default=None)
    
