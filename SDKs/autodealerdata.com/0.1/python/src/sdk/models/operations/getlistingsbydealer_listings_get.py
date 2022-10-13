from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetListingsByDealerListingsGetQueryParams:
    dealer_id: int = field(default=None, metadata={'query_param': { 'field_name': 'dealerID', 'style': 'form', 'explode': True }})
    jwt: str = field(default=None, metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    new_cars: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'newCars', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingsByDealerListingsGetRequest:
    query_params: GetListingsByDealerListingsGetQueryParams = field(default=None)
    

@dataclass
class GetListingsByDealerListingsGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    listing_resp: Optional[shared.ListingResp] = field(default=None)
    status_code: int = field(default=None)
    
