from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostLocationsRequestBodyAddress:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    street_and_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streetAndNumber' }})
    

@dataclass_json
@dataclass
class PostLocationsRequestBodyCoordinates:
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    

@dataclass_json
@dataclass
class PostLocationsRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    address: PostLocationsRequestBodyAddress = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    chargestations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargestations' }})
    coordinates: PostLocationsRequestBodyCoordinates = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coordinates' }})
    operator_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorName' }})
    

@dataclass
class PostLocationsRequest:
    request: PostLocationsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostLocations200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class PostLocationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_locations_200_application_json_object: Optional[PostLocations200ApplicationJSON] = field(default=None)
    
