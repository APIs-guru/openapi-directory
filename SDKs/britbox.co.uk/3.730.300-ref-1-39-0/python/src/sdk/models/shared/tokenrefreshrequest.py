from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TokenRefreshRequestCookieTypeEnum(str, Enum):
    SESSION = "Session"
    PERSISTENT = "Persistent"


@dataclass_json
@dataclass
class TokenRefreshRequest:
    cookie_type: Optional[TokenRefreshRequestCookieTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookieType' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    
