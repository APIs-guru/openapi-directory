from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetListingMotorcycleIDExtraPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingMotorcycleIDExtraQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingMotorcycleIDExtraRequest:
    path_params: GetListingMotorcycleIDExtraPathParams = field()
    query_params: GetListingMotorcycleIDExtraQueryParams = field()
    

@dataclass
class GetListingMotorcycleIDExtraResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    listing_extra_attributes: Optional[shared.ListingExtraAttributes] = field(default=None)
    
