from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FindEligibleItemsQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class FindEligibleItemsHeaders:
    x_ebay_c_marketplace_id: str = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindEligibleItemsSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FindEligibleItemsRequest:
    query_params: FindEligibleItemsQueryParams = field(default=None)
    headers: FindEligibleItemsHeaders = field(default=None)
    security: FindEligibleItemsSecurity = field(default=None)
    

@dataclass
class FindEligibleItemsResponse:
    content_type: str = field(default=None)
    paged_eligible_item_collection: Optional[shared.PagedEligibleItemCollection] = field(default=None)
    status_code: int = field(default=None)
    
