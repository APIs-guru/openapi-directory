from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccessTokenGrantTypeEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"


@dataclass_json
@dataclass
class AccessToken:
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    grant_type: AccessTokenGrantTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    code_verifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code_verifier') }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_uri') }})
    
