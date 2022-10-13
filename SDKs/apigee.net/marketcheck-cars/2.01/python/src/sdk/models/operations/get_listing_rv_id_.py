from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetListingRvIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingRvIDQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingRvIDRequest:
    path_params: GetListingRvIDPathParams = field(default=None)
    query_params: GetListingRvIDQueryParams = field(default=None)
    

@dataclass
class GetListingRvIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    rv_listing: Optional[shared.RvListing] = field(default=None)
    status_code: int = field(default=None)
    
