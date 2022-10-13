from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UserAccountTypeEnum(str, Enum):
    DEVICE_ACCOUNT = "deviceAccount"
    USER_ACCOUNT = "userAccount"

class UserManagementTypeEnum(str, Enum):
    GOOGLE_MANAGED = "googleManaged"
    EMM_MANAGED = "emmManaged"


@dataclass_json
@dataclass
class User:
    account_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountIdentifier' }})
    account_type: Optional[UserAccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountType' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    management_type: Optional[UserManagementTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managementType' }})
    primary_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryEmail' }})
    
