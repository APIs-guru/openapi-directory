from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    cookie_type: Optional[AccountTokenRequestCookieTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookieType' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    scopes: List[AccountTokenRequestScopesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    
