from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetListingHeavyEquipmentIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingHeavyEquipmentIDQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingHeavyEquipmentIDRequest:
    path_params: GetListingHeavyEquipmentIDPathParams = field(default=None)
    query_params: GetListingHeavyEquipmentIDQueryParams = field(default=None)
    

@dataclass
class GetListingHeavyEquipmentIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    heavy_equipments_listing: Optional[shared.HeavyEquipmentsListing] = field(default=None)
    status_code: int = field(default=None)
    
