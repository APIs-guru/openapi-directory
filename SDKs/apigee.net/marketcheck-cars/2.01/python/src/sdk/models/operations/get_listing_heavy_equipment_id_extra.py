from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetListingHeavyEquipmentIDExtraPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingHeavyEquipmentIDExtraQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingHeavyEquipmentIDExtraRequest:
    path_params: GetListingHeavyEquipmentIDExtraPathParams = field()
    query_params: GetListingHeavyEquipmentIDExtraQueryParams = field()
    

@dataclass
class GetListingHeavyEquipmentIDExtraResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    listing_extra_attributes: Optional[shared.ListingExtraAttributes] = field(default=None)
    
