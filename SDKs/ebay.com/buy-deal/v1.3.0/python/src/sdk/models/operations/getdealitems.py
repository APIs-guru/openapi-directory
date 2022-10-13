from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDealItemsQueryParams:
    category_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category_ids', 'style': 'form', 'explode': True }})
    commissionable: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'commissionable', 'style': 'form', 'explode': True }})
    delivery_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'delivery_country', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDealItemsHeaders:
    x_ebay_c_marketplace_id: str = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID' }})
    

@dataclass
class GetDealItemsSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDealItemsRequest:
    query_params: GetDealItemsQueryParams = field(default=None)
    headers: GetDealItemsHeaders = field(default=None)
    security: GetDealItemsSecurity = field(default=None)
    

@dataclass
class GetDealItemsResponse:
    content_type: str = field(default=None)
    deal_item_search_response: Optional[shared.DealItemSearchResponse] = field(default=None)
    status_code: int = field(default=None)
    
