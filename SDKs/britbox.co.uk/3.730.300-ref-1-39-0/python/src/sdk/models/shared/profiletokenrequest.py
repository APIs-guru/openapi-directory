from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProfileTokenRequestCookieTypeEnum(str, Enum):
    SESSION = "Session"
    PERSISTENT = "Persistent"

class ProfileTokenRequestScopesEnum(str, Enum):
    CATALOG = "Catalog"
    COMMERCE = "Commerce"
    SETTINGS = "Settings"


@dataclass_json
@dataclass
class ProfileTokenRequest:
    profile_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileId') }})
    scopes: List[ProfileTokenRequestScopesEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    cookie_type: Optional[ProfileTokenRequestCookieTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookieType') }})
    pin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pin') }})
    
