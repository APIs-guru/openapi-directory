from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetAPIV1DonationsCarbonCalculateTransportationMethodEnum(str, Enum):
    AIR = "air"
    TRUCK = "truck"
    RAIL = "rail"
    SEA = "sea"


@dataclass
class GetAPIV1DonationsCarbonCalculateQueryParams:
    weight_lb: float = field(metadata={'query_param': { 'field_name': 'weight_lb', 'style': 'form', 'explode': True }})
    destination_address: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'destination_address', 'style': 'form', 'explode': True }})
    distance_mi: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'distance_mi', 'style': 'form', 'explode': True }})
    origin_address: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'origin_address', 'style': 'form', 'explode': True }})
    transportation_method: Optional[GetAPIV1DonationsCarbonCalculateTransportationMethodEnum] = field(default=None, metadata={'query_param': { 'field_name': 'transportation_method', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1DonationsCarbonCalculateSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPIV1DonationsCarbonCalculateRequest:
    query_params: GetAPIV1DonationsCarbonCalculateQueryParams = field()
    security: GetAPIV1DonationsCarbonCalculateSecurity = field()
    

@dataclass
class GetAPIV1DonationsCarbonCalculateResponse:
    content_type: str = field()
    status_code: int = field()
    
