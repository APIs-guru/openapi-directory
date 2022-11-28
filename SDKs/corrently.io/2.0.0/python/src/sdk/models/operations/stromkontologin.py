from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StromkontoLoginRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    
class StromkontoLogin200ApplicationJSONStatusEnum(str, Enum):
    REGISTERED = "registered"
    UNREGISTERED = "unregistered"


@dataclass_json
@dataclass
class StromkontoLogin200ApplicationJSON:
    status: Optional[StromkontoLogin200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class StromkontoLoginRequest:
    request: StromkontoLoginRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StromkontoLoginResponse:
    content_type: str = field()
    status_code: int = field()
    stromkonto_login_200_application_json_object: Optional[StromkontoLogin200ApplicationJSON] = field(default=None)
    
