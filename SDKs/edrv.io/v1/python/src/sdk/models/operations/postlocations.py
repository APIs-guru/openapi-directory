from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostLocationsRequestBodyAddress:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    street_and_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streetAndNumber') }})
    

@dataclass_json
@dataclass
class PostLocationsRequestBodyCoordinates:
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    

@dataclass_json
@dataclass
class PostLocationsRequestBody:
    address: PostLocationsRequestBodyAddress = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    coordinates: PostLocationsRequestBodyCoordinates = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    operator_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorName') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    chargestations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargestations') }})
    

@dataclass_json
@dataclass
class PostLocations200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class PostLocationsRequest:
    request: PostLocationsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostLocationsResponse:
    content_type: str = field()
    status_code: int = field()
    post_locations_200_application_json_object: Optional[PostLocations200ApplicationJSON] = field(default=None)
    
