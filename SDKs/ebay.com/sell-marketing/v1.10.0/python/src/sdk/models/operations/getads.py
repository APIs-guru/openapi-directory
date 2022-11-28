from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAdsPathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdsQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    listing_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'listing_ids', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAdsSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAdsRequest:
    path_params: GetAdsPathParams = field()
    query_params: GetAdsQueryParams = field()
    security: GetAdsSecurity = field()
    

@dataclass
class GetAdsResponse:
    content_type: str = field()
    status_code: int = field()
    ad_paged_collection: Optional[shared.AdPagedCollection] = field(default=None)
    
