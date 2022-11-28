from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PaginationAuthScopeEnum(str, Enum):
    CATALOG = "Catalog"
    COMMERCE = "Commerce"
    SETTINGS = "Settings"

class PaginationAuthTypeEnum(str, Enum):
    USER_ACCOUNT = "UserAccount"
    USER_PROFILE = "UserProfile"


@dataclass_json
@dataclass
class PaginationAuth:
    scope: PaginationAuthScopeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    type: PaginationAuthTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
