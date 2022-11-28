from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UserDeveloperAccountPermissionsEnum(str, Enum):
    DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED = "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED"
    CAN_SEE_ALL_APPS = "CAN_SEE_ALL_APPS"
    CAN_VIEW_FINANCIAL_DATA_GLOBAL = "CAN_VIEW_FINANCIAL_DATA_GLOBAL"
    CAN_MANAGE_PERMISSIONS_GLOBAL = "CAN_MANAGE_PERMISSIONS_GLOBAL"
    CAN_EDIT_GAMES_GLOBAL = "CAN_EDIT_GAMES_GLOBAL"
    CAN_PUBLISH_GAMES_GLOBAL = "CAN_PUBLISH_GAMES_GLOBAL"
    CAN_REPLY_TO_REVIEWS_GLOBAL = "CAN_REPLY_TO_REVIEWS_GLOBAL"
    CAN_MANAGE_PUBLIC_APKS_GLOBAL = "CAN_MANAGE_PUBLIC_APKS_GLOBAL"
    CAN_MANAGE_TRACK_APKS_GLOBAL = "CAN_MANAGE_TRACK_APKS_GLOBAL"
    CAN_MANAGE_TRACK_USERS_GLOBAL = "CAN_MANAGE_TRACK_USERS_GLOBAL"
    CAN_MANAGE_PUBLIC_LISTING_GLOBAL = "CAN_MANAGE_PUBLIC_LISTING_GLOBAL"
    CAN_MANAGE_DRAFT_APPS_GLOBAL = "CAN_MANAGE_DRAFT_APPS_GLOBAL"
    CAN_CREATE_MANAGED_PLAY_APPS_GLOBAL = "CAN_CREATE_MANAGED_PLAY_APPS_GLOBAL"
    CAN_CHANGE_MANAGED_PLAY_SETTING_GLOBAL = "CAN_CHANGE_MANAGED_PLAY_SETTING_GLOBAL"
    CAN_MANAGE_ORDERS_GLOBAL = "CAN_MANAGE_ORDERS_GLOBAL"

class UserAccessStateEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    INVITED = "INVITED"
    INVITATION_EXPIRED = "INVITATION_EXPIRED"
    ACCESS_GRANTED = "ACCESS_GRANTED"
    ACCESS_EXPIRED = "ACCESS_EXPIRED"


@dataclass_json
@dataclass
class UserInput:
    r"""UserInput
    A user resource.
    """
    
    developer_account_permissions: Optional[List[UserDeveloperAccountPermissionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerAccountPermissions') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class User:
    r"""User
    A user resource.
    """
    
    access_state: Optional[UserAccessStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessState') }})
    developer_account_permissions: Optional[List[UserDeveloperAccountPermissionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerAccountPermissions') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationTime') }})
    grants: Optional[List[Grant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grants') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    partial: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partial') }})
    
