from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetUsers200ApplicationJSONMobileApplicationDetailsOsEnum(str, Enum):
    ANDROID = "Android"
    IOS = "IOS"
    OTHER = "OTHER"

class GetUsers200ApplicationJSONMobileApplicationDetailsDeviceNameEnum(str, Enum):
    I_PHONE = "iPhone"
    ANDROID = "Android"
    OTHER = "Other"

class GetUsers200ApplicationJSONMobileApplicationDetailsStatusEnum(str, Enum):
    LIVE = "LIVE"
    CLOSED = "CLOSED"
    LOCKED = "LOCKED"
    SMS_SENT = "SMS_SENT"


@dataclass_json
@dataclass
class GetUsers200ApplicationJSONMobileApplicationDetailsMobileApplication:
    os: Optional[GetUsers200ApplicationJSONMobileApplicationDetailsOsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OS' }})
    business_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessUserId' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientID' }})
    device_name: Optional[GetUsers200ApplicationJSONMobileApplicationDetailsDeviceNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceName' }})
    device_os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceOSVersion' }})
    mobile_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileApplicationId' }})
    status: Optional[GetUsers200ApplicationJSONMobileApplicationDetailsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
class GetUsers200ApplicationJSONRoleEnum(str, Enum):
    ADMIN = "ADMIN"
    FULL_USER = "FULL_USER"
    READ_ONLY = "READ_ONLY"
    CARD_ONLY = "CARD_ONLY"

class GetUsers200ApplicationJSONStatusEnum(str, Enum):
    LIVE = "LIVE"
    CLOSED = "CLOSED"
    FROZEN = "FROZEN"
    INVITE_SENT = "INVITE_SENT"
    SMS_CODE_SENT = "SMS_CODE_SENT"


@dataclass_json
@dataclass
class GetUsers200ApplicationJSONUser:
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    lastlogin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastlogin' }})
    mobile_application_details: Optional[GetUsers200ApplicationJSONMobileApplicationDetailsMobileApplication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileApplicationDetails' }})
    mobile_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileNumber' }})
    role: Optional[GetUsers200ApplicationJSONRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    status: Optional[GetUsers200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    user_cvl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userCvl' }})
    

@dataclass
class GetUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    users: Optional[List[GetUsers200ApplicationJSONUser]] = field(default=None)
    
