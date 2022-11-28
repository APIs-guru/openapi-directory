from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetListingCarFsboIDMediaPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingCarFsboIDMediaQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    append_api_key: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'append_api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingCarFsboIDMediaRequest:
    path_params: GetListingCarFsboIDMediaPathParams = field()
    query_params: GetListingCarFsboIDMediaQueryParams = field()
    

@dataclass
class GetListingCarFsboIDMediaResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    listing_media: Optional[shared.ListingMedia] = field(default=None)
    
