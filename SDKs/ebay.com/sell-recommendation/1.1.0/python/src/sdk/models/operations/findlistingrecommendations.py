from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FindListingRecommendationsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class FindListingRecommendationsHeaders:
    x_ebay_c_marketplace_id: str = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID' }})
    

@dataclass
class FindListingRecommendationsSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FindListingRecommendationsRequest:
    query_params: FindListingRecommendationsQueryParams = field(default=None)
    headers: FindListingRecommendationsHeaders = field(default=None)
    request: Optional[shared.FindListingRecommendationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: FindListingRecommendationsSecurity = field(default=None)
    

@dataclass
class FindListingRecommendationsResponse:
    content_type: str = field(default=None)
    paged_listing_recommendation_collection: Optional[shared.PagedListingRecommendationCollection] = field(default=None)
    status_code: int = field(default=None)
    
