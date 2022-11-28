from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountTokenRequestCookieTypeEnum(str, Enum):
    SESSION = "Session"
    PERSISTENT = "Persistent"

class AccountTokenRequestScopesEnum(str, Enum):
    CATALOG = "Catalog"
    COMMERCE = "Commerce"
    SETTINGS = "Settings"
    PLAYBACK = "Playback"


@dataclass_json
@dataclass
class AccountTokenRequest:
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    scopes: List[AccountTokenRequestScopesEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    cookie_type: Optional[AccountTokenRequestCookieTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookieType') }})
    
