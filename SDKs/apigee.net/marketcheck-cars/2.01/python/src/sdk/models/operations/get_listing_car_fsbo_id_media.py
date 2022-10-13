from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetListingCarFsboIDMediaPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingCarFsboIDMediaQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    append_api_key: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'append_api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingCarFsboIDMediaRequest:
    path_params: GetListingCarFsboIDMediaPathParams = field(default=None)
    query_params: GetListingCarFsboIDMediaQueryParams = field(default=None)
    

@dataclass
class GetListingCarFsboIDMediaResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    listing_media: Optional[shared.ListingMedia] = field(default=None)
    status_code: int = field(default=None)
    
