from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    cookie_type: Optional[ProfileTokenRequestCookieTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookieType' }})
    pin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pin' }})
    profile_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileId' }})
    scopes: List[ProfileTokenRequestScopesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    
