from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetListingMotorcycleIDExtraPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingMotorcycleIDExtraQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingMotorcycleIDExtraRequest:
    path_params: GetListingMotorcycleIDExtraPathParams = field(default=None)
    query_params: GetListingMotorcycleIDExtraQueryParams = field(default=None)
    

@dataclass
class GetListingMotorcycleIDExtraResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    listing_extra_attributes: Optional[shared.ListingExtraAttributes] = field(default=None)
    status_code: int = field(default=None)
    
