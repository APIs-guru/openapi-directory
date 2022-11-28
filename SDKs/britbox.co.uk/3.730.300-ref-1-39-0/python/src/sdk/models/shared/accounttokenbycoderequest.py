from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountTokenByCodeRequestScopesEnum(str, Enum):
    CATALOG = "Catalog"
    COMMERCE = "Commerce"
    SETTINGS = "Settings"
    PLAYBACK = "Playback"


@dataclass_json
@dataclass
class AccountTokenByCodeRequest:
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    scopes: List[AccountTokenByCodeRequestScopesEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    
