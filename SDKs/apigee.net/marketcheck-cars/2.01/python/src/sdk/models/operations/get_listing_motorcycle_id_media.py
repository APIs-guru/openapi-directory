from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetListingMotorcycleIDMediaPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingMotorcycleIDMediaQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingMotorcycleIDMediaRequest:
    path_params: GetListingMotorcycleIDMediaPathParams = field()
    query_params: GetListingMotorcycleIDMediaQueryParams = field()
    

@dataclass
class GetListingMotorcycleIDMediaResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    listing_media: Optional[shared.ListingMedia] = field(default=None)
    
