from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class RefreshTokenGrantTypeEnum(str, Enum):
    REFRESH_TOKEN = "refresh_token"


@dataclass_json
@dataclass
class RefreshToken:
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_secret' }})
    grant_type: RefreshTokenGrantTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grant_type' }})
    refresh_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_token' }})
    
