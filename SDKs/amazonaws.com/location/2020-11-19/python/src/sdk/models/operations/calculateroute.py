from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CalculateRoutePathParams:
    calculator_name: str = field(default=None, metadata={'path_param': { 'field_name': 'CalculatorName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CalculateRouteHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CalculateRouteRequestBodyCarModeOptions:
    avoid_ferries: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvoidFerries' }})
    avoid_tolls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvoidTolls' }})
    
class CalculateRouteRequestBodyDistanceUnitEnum(str, Enum):
    KILOMETERS = "Kilometers"
    MILES = "Miles"

class CalculateRouteRequestBodyTravelModeEnum(str, Enum):
    CAR = "Car"
    TRUCK = "Truck"
    WALKING = "Walking"


@dataclass_json
@dataclass
class CalculateRouteRequestBodyTruckModeOptions:
    avoid_ferries: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvoidFerries' }})
    avoid_tolls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvoidTolls' }})
    dimensions: Optional[shared.TruckDimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimensions' }})
    weight: Optional[shared.TruckWeight] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Weight' }})
    

@dataclass_json
@dataclass
class CalculateRouteRequestBody:
    car_mode_options: Optional[CalculateRouteRequestBodyCarModeOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CarModeOptions' }})
    depart_now: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DepartNow' }})
    departure_position: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeparturePosition' }})
    departure_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DepartureTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination_position: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationPosition' }})
    distance_unit: Optional[CalculateRouteRequestBodyDistanceUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DistanceUnit' }})
    include_leg_geometry: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeLegGeometry' }})
    travel_mode: Optional[CalculateRouteRequestBodyTravelModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TravelMode' }})
    truck_mode_options: Optional[CalculateRouteRequestBodyTruckModeOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TruckModeOptions' }})
    waypoint_positions: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaypointPositions' }})
    

@dataclass
class CalculateRouteRequest:
    path_params: CalculateRoutePathParams = field(default=None)
    headers: CalculateRouteHeaders = field(default=None)
    request: CalculateRouteRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CalculateRouteResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    calculate_route_response: Optional[shared.CalculateRouteResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
