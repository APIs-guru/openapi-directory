from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetListingRvIDExtraPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingRvIDExtraQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingRvIDExtraRequest:
    path_params: GetListingRvIDExtraPathParams = field()
    query_params: GetListingRvIDExtraQueryParams = field()
    

@dataclass
class GetListingRvIDExtraResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    listing_extra_attributes: Optional[shared.ListingExtraAttributes] = field(default=None)
    
