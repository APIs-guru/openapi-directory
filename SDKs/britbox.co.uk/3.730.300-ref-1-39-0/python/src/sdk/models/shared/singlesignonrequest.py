from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class SingleSignOnRequestCookieTypeEnum(str, Enum):
    SESSION = "Session"
    PERSISTENT = "Persistent"

class SingleSignOnRequestProviderEnum(str, Enum):
    FACEBOOK = "Facebook"

class SingleSignOnRequestScopesEnum(str, Enum):
    CATALOG = "Catalog"
    COMMERCE = "Commerce"
    SETTINGS = "Settings"
    PLAYBACK = "Playback"


@dataclass_json
@dataclass
class SingleSignOnRequest:
    cookie_type: Optional[SingleSignOnRequestCookieTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookieType' }})
    link_accounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkAccounts' }})
    provider: SingleSignOnRequestProviderEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    scopes: Optional[List[SingleSignOnRequestScopesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    
