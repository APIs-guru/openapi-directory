from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsOsEnum(str, Enum):
    ANDROID = "Android"
    IOS = "IOS"
    OTHER = "OTHER"

class OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsDeviceNameEnum(str, Enum):
    I_PHONE = "iPhone"
    ANDROID = "Android"
    OTHER = "Other"

class OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsStatusEnum(str, Enum):
    LIVE = "LIVE"
    CLOSED = "CLOSED"
    LOCKED = "LOCKED"
    SMS_SENT = "SMS_SENT"


@dataclass_json
@dataclass
class OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsMobileApplication:
    os: Optional[OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsOsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OS' }})
    business_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessUserId' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientID' }})
    device_name: Optional[OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsDeviceNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceName' }})
    device_os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceOSVersion' }})
    mobile_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileApplicationId' }})
    status: Optional[OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
class OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum(str, Enum):
    ADMIN = "ADMIN"
    FULL_USER = "FULL_USER"
    READ_ONLY = "READ_ONLY"
    CARD_ONLY = "CARD_ONLY"

class OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum(str, Enum):
    LIVE = "LIVE"
    CLOSED = "CLOSED"
    FROZEN = "FROZEN"
    INVITE_SENT = "INVITE_SENT"
    SMS_CODE_SENT = "SMS_CODE_SENT"


@dataclass_json
@dataclass
class OneusersGetResponses200ContentApplication1jsonSchemaItems:
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    lastlogin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastlogin' }})
    mobile_application_details: Optional[OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsMobileApplication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileApplicationDetails' }})
    mobile_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileNumber' }})
    role: Optional[OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    status: Optional[OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    user_cvl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userCvl' }})
    
