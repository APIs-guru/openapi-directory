from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateTokenResponse:
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Token') }})
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenId') }})
    token_type: Optional[TokenTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenType') }})
    
