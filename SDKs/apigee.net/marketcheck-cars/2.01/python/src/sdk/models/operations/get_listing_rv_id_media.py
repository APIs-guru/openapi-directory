from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetListingRvIDMediaPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingRvIDMediaQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingRvIDMediaRequest:
    path_params: GetListingRvIDMediaPathParams = field()
    query_params: GetListingRvIDMediaQueryParams = field()
    

@dataclass
class GetListingRvIDMediaResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    listing_media: Optional[shared.ListingMedia] = field(default=None)
    
