from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetListingCarAuctionIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingCarAuctionIDQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    append_api_key: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'append_api_key', 'style': 'form', 'explode': True }})
    include_relevant_links: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_relevant_links', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingCarAuctionIDRequest:
    path_params: GetListingCarAuctionIDPathParams = field(default=None)
    query_params: GetListingCarAuctionIDQueryParams = field(default=None)
    

@dataclass
class GetListingCarAuctionIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    listing: Optional[shared.Listing] = field(default=None)
    status_code: int = field(default=None)
    
