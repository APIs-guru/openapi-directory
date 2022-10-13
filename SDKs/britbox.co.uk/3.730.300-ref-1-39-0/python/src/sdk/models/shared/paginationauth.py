from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

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
    scope: PaginationAuthScopeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: PaginationAuthTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
