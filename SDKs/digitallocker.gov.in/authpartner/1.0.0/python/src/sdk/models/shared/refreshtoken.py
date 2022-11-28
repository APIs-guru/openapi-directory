from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RefreshTokenGrantTypeEnum(str, Enum):
    REFRESH_TOKEN = "refresh_token"


@dataclass_json
@dataclass
class RefreshToken:
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    grant_type: RefreshTokenGrantTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    refresh_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    
