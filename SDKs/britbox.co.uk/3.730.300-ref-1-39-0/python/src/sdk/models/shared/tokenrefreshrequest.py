from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TokenRefreshRequestCookieTypeEnum(str, Enum):
    SESSION = "Session"
    PERSISTENT = "Persistent"


@dataclass_json
@dataclass
class TokenRefreshRequest:
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    cookie_type: Optional[TokenRefreshRequestCookieTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookieType') }})
    
