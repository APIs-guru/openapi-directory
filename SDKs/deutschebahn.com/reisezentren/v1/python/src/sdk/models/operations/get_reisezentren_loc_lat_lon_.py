from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReisezentrenLocLatLonPathParams:
    lat: float = field(default=None, metadata={'path_param': { 'field_name': 'lat', 'style': 'simple', 'explode': False }})
    lon: float = field(default=None, metadata={'path_param': { 'field_name': 'lon', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReisezentrenLocLatLonRequest:
    path_params: GetReisezentrenLocLatLonPathParams = field(default=None)
    

@dataclass
class GetReisezentrenLocLatLonResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    travel_center: Optional[shared.TravelCenter] = field(default=None)
    
