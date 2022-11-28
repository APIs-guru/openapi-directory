from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    provider: SingleSignOnRequestProviderEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    cookie_type: Optional[SingleSignOnRequestCookieTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookieType') }})
    link_accounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkAccounts') }})
    scopes: Optional[List[SingleSignOnRequestScopesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    
