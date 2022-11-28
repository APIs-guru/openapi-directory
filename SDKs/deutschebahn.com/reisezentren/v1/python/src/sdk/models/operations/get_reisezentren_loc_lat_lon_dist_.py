from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReisezentrenLocLatLonDistPathParams:
    dist: float = field(metadata={'path_param': { 'field_name': 'dist', 'style': 'simple', 'explode': False }})
    lat: float = field(metadata={'path_param': { 'field_name': 'lat', 'style': 'simple', 'explode': False }})
    lon: float = field(metadata={'path_param': { 'field_name': 'lon', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReisezentrenLocLatLonDistRequest:
    path_params: GetReisezentrenLocLatLonDistPathParams = field()
    

@dataclass
class GetReisezentrenLocLatLonDistResponse:
    content_type: str = field()
    status_code: int = field()
    travel_center: Optional[shared.TravelCenter] = field(default=None)
    
