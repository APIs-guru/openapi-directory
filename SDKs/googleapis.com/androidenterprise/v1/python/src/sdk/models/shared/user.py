from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UserAccountTypeEnum(str, Enum):
    DEVICE_ACCOUNT = "deviceAccount"
    USER_ACCOUNT = "userAccount"

class UserManagementTypeEnum(str, Enum):
    GOOGLE_MANAGED = "googleManaged"
    EMM_MANAGED = "emmManaged"


@dataclass_json
@dataclass
class User:
    r"""User
    A Users resource represents an account associated with an enterprise. The account may be specific to a device or to an individual user (who can then use the account across multiple devices). The account may provide access to managed Google Play only, or to other Google services, depending on the identity model: - The Google managed domain identity model requires synchronization to Google account sources (via primaryEmail). - The managed Google Play Accounts identity model provides a dynamic means for enterprises to create user or device accounts as needed. These accounts provide access to managed Google Play. 
    """
    
    account_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountIdentifier') }})
    account_type: Optional[UserAccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    management_type: Optional[UserManagementTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managementType') }})
    primary_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryEmail') }})
    
