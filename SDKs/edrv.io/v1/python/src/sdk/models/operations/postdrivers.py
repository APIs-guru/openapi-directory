from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostDriversRequestBodyAddress:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    street_and_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streetAndNumber') }})
    

@dataclass_json
@dataclass
class PostDriversRequestBodyPhone:
    home: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home') }})
    mobile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobile') }})
    work: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('work') }})
    
class PostDriversRequestBodySourceEnum(str, Enum):
    PHYSICAL = "physical"
    SLACK = "slack"
    TELEGRAM = "telegram"
    SMS = "sms"


@dataclass_json
@dataclass
class PostDriversRequestBody:
    firstname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstname') }})
    lastname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastname') }})
    source: PostDriversRequestBodySourceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    address: Optional[PostDriversRequestBodyAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    phone: Optional[PostDriversRequestBodyPhone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    

@dataclass_json
@dataclass
class PostDrivers200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class PostDriversRequest:
    request: PostDriversRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostDriversResponse:
    content_type: str = field()
    status_code: int = field()
    post_drivers_200_application_json_object: Optional[PostDrivers200ApplicationJSON] = field(default=None)
    
