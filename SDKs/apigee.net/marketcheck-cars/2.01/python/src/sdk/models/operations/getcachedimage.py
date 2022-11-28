from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCachedImagePathParams:
    image_id: str = field(metadata={'path_param': { 'field_name': 'imageID', 'style': 'simple', 'explode': False }})
    listing_id: str = field(metadata={'path_param': { 'field_name': 'listingID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCachedImageQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCachedImageRequest:
    path_params: GetCachedImagePathParams = field()
    query_params: GetCachedImageQueryParams = field()
    

@dataclass
class GetCachedImageResponse:
    content_type: str = field()
    status_code: int = field()
    cache_image_response: Optional[bytes] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
