from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FindListingRecommendationsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class FindListingRecommendationsHeaders:
    x_ebay_c_marketplace_id: str = field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindListingRecommendationsSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FindListingRecommendationsRequest:
    headers: FindListingRecommendationsHeaders = field()
    query_params: FindListingRecommendationsQueryParams = field()
    security: FindListingRecommendationsSecurity = field()
    request: Optional[shared.FindListingRecommendationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class FindListingRecommendationsResponse:
    content_type: str = field()
    status_code: int = field()
    paged_listing_recommendation_collection: Optional[shared.PagedListingRecommendationCollection] = field(default=None)
    
