from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    cookie_type: Optional[ItvPinAuthRequestCookieTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookieType' }})
    pin: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pin' }})
    scopes: Optional[List[ItvPinAuthRequestScopesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    
