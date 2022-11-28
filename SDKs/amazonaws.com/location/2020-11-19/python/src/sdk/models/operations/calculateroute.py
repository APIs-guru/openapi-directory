from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CalculateRoutePathParams:
    calculator_name: str = field(metadata={'path_param': { 'field_name': 'CalculatorName', 'style': 'simple', 'explode': False }})
    

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
    r"""CalculateRouteRequestBodyCarModeOptions
    Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>.
    """
    
    avoid_ferries: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvoidFerries') }})
    avoid_tolls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvoidTolls') }})
    
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
    r"""CalculateRouteRequestBodyTruckModeOptions
    Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>.
    """
    
    avoid_ferries: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvoidFerries') }})
    avoid_tolls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvoidTolls') }})
    dimensions: Optional[shared.TruckDimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    weight: Optional[shared.TruckWeight] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Weight') }})
    

@dataclass_json
@dataclass
class CalculateRouteRequestBody:
    departure_position: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeparturePosition') }})
    destination_position: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPosition') }})
    car_mode_options: Optional[CalculateRouteRequestBodyCarModeOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CarModeOptions') }})
    depart_now: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DepartNow') }})
    departure_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DepartureTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    distance_unit: Optional[CalculateRouteRequestBodyDistanceUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DistanceUnit') }})
    include_leg_geometry: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeLegGeometry') }})
    travel_mode: Optional[CalculateRouteRequestBodyTravelModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TravelMode') }})
    truck_mode_options: Optional[CalculateRouteRequestBodyTruckModeOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TruckModeOptions') }})
    waypoint_positions: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaypointPositions') }})
    

@dataclass
class CalculateRouteRequest:
    headers: CalculateRouteHeaders = field()
    path_params: CalculateRoutePathParams = field()
    request: CalculateRouteRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CalculateRouteResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    calculate_route_response: Optional[shared.CalculateRouteResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
