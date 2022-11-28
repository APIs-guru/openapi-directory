from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PatchLocationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PatchLocationRequestBodyAddress:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    street_and_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streetAndNumber') }})
    

@dataclass_json
@dataclass
class PatchLocationRequestBodyCoordinates:
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    

@dataclass_json
@dataclass
class PatchLocationRequestBodyOpeningHours0:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

@dataclass_json
@dataclass
class PatchLocationRequestBodyOpeningHours1:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

@dataclass_json
@dataclass
class PatchLocationRequestBodyOpeningHours2:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

@dataclass_json
@dataclass
class PatchLocationRequestBodyOpeningHours3:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

@dataclass_json
@dataclass
class PatchLocationRequestBodyOpeningHours4:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

@dataclass_json
@dataclass
class PatchLocationRequestBodyOpeningHours5:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

@dataclass_json
@dataclass
class PatchLocationRequestBodyOpeningHours6:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

@dataclass_json
@dataclass
class PatchLocationRequestBodyOpeningHours:
    zero: Optional[List[PatchLocationRequestBodyOpeningHours0]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0') }})
    one: Optional[List[PatchLocationRequestBodyOpeningHours1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    two: Optional[List[PatchLocationRequestBodyOpeningHours2]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('2') }})
    three: Optional[List[PatchLocationRequestBodyOpeningHours3]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('3') }})
    four: Optional[List[PatchLocationRequestBodyOpeningHours4]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('4') }})
    five: Optional[List[PatchLocationRequestBodyOpeningHours5]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('5') }})
    six: Optional[List[PatchLocationRequestBodyOpeningHours6]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('6') }})
    

@dataclass_json
@dataclass
class PatchLocationRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    address: Optional[PatchLocationRequestBodyAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    chargestations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargestations') }})
    coordinates: Optional[PatchLocationRequestBodyCoordinates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    opening_hours: Optional[PatchLocationRequestBodyOpeningHours] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openingHours') }})
    operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorName') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    

@dataclass_json
@dataclass
class PatchLocation200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class PatchLocationRequest:
    path_params: PatchLocationPathParams = field()
    request: PatchLocationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchLocationResponse:
    content_type: str = field()
    status_code: int = field()
    patch_location_200_application_json_object: Optional[PatchLocation200ApplicationJSON] = field(default=None)
    
