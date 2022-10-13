from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostDriversRequestBodyAddress:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    street_and_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streetAndNumber' }})
    

@dataclass_json
@dataclass
class PostDriversRequestBodyPhone:
    home: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home' }})
    mobile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobile' }})
    work: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'work' }})
    
class PostDriversRequestBodySourceEnum(str, Enum):
    PHYSICAL = "physical"
    SLACK = "slack"
    TELEGRAM = "telegram"
    SMS = "sms"


@dataclass_json
@dataclass
class PostDriversRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    address: Optional[PostDriversRequestBodyAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    firstname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstname' }})
    lastname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastname' }})
    phone: Optional[PostDriversRequestBodyPhone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    source: PostDriversRequestBodySourceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    

@dataclass
class PostDriversRequest:
    request: PostDriversRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostDrivers200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class PostDriversResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_drivers_200_application_json_object: Optional[PostDrivers200ApplicationJSON] = field(default=None)
    
