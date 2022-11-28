from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ItvPinAuthRequestCookieTypeEnum(str, Enum):
    SESSION = "Session"
    PERSISTENT = "Persistent"

class ItvPinAuthRequestScopesEnum(str, Enum):
    CATALOG = "Catalog"
    COMMERCE = "Commerce"
    SETTINGS = "Settings"
    PLAYBACK = "Playback"


@dataclass_json
@dataclass
class ItvPinAuthRequest:
    pin: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pin') }})
    cookie_type: Optional[ItvPinAuthRequestCookieTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookieType') }})
    scopes: Optional[List[ItvPinAuthRequestScopesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    
