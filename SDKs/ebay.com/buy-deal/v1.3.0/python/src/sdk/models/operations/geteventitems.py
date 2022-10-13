from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventItemsQueryParams:
    category_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category_ids', 'style': 'form', 'explode': True }})
    delivery_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'delivery_country', 'style': 'form', 'explode': True }})
    event_ids: str = field(default=None, metadata={'query_param': { 'field_name': 'event_ids', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEventItemsHeaders:
    x_ebay_c_marketplace_id: str = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID' }})
    

@dataclass
class GetEventItemsSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEventItemsRequest:
    query_params: GetEventItemsQueryParams = field(default=None)
    headers: GetEventItemsHeaders = field(default=None)
    security: GetEventItemsSecurity = field(default=None)
    

@dataclass
class GetEventItemsResponse:
    content_type: str = field(default=None)
    event_item_search_response: Optional[shared.EventItemSearchResponse] = field(default=None)
    status_code: int = field(default=None)
    
