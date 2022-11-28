from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetListingRvIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingRvIDQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingRvIDRequest:
    path_params: GetListingRvIDPathParams = field()
    query_params: GetListingRvIDQueryParams = field()
    

@dataclass
class GetListingRvIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    rv_listing: Optional[shared.RvListing] = field(default=None)
    
