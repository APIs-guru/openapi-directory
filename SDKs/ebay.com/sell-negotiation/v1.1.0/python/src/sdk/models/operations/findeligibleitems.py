from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FindEligibleItemsQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class FindEligibleItemsHeaders:
    x_ebay_c_marketplace_id: str = field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindEligibleItemsSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FindEligibleItemsRequest:
    headers: FindEligibleItemsHeaders = field()
    query_params: FindEligibleItemsQueryParams = field()
    security: FindEligibleItemsSecurity = field()
    

@dataclass
class FindEligibleItemsResponse:
    content_type: str = field()
    status_code: int = field()
    paged_eligible_item_collection: Optional[shared.PagedEligibleItemCollection] = field(default=None)
    
