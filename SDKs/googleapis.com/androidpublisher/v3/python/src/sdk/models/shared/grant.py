from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GrantAppLevelPermissionsEnum(str, Enum):
    APP_LEVEL_PERMISSION_UNSPECIFIED = "APP_LEVEL_PERMISSION_UNSPECIFIED"
    CAN_ACCESS_APP = "CAN_ACCESS_APP"
    CAN_VIEW_FINANCIAL_DATA = "CAN_VIEW_FINANCIAL_DATA"
    CAN_MANAGE_PERMISSIONS = "CAN_MANAGE_PERMISSIONS"
    CAN_REPLY_TO_REVIEWS = "CAN_REPLY_TO_REVIEWS"
    CAN_MANAGE_PUBLIC_APKS = "CAN_MANAGE_PUBLIC_APKS"
    CAN_MANAGE_TRACK_APKS = "CAN_MANAGE_TRACK_APKS"
    CAN_MANAGE_TRACK_USERS = "CAN_MANAGE_TRACK_USERS"
    CAN_MANAGE_PUBLIC_LISTING = "CAN_MANAGE_PUBLIC_LISTING"
    CAN_MANAGE_DRAFT_APPS = "CAN_MANAGE_DRAFT_APPS"
    CAN_MANAGE_ORDERS = "CAN_MANAGE_ORDERS"


@dataclass_json
@dataclass
class Grant:
    r"""Grant
    An access grant resource.
    """
    
    app_level_permissions: Optional[List[GrantAppLevelPermissionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appLevelPermissions') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    
