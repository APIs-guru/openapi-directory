from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StromkontoLoginRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    

@dataclass
class StromkontoLoginRequest:
    request: StromkontoLoginRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class StromkontoLogin200ApplicationJSONStatusEnum(str, Enum):
    REGISTERED = "registered"
    UNREGISTERED = "unregistered"


@dataclass_json
@dataclass
class StromkontoLogin200ApplicationJSON:
    status: Optional[StromkontoLogin200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class StromkontoLoginResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    stromkonto_login_200_application_json_object: Optional[StromkontoLogin200ApplicationJSON] = field(default=None)
    
