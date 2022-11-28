from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccessResponseEaadharEnum(str, Enum):
    Y = "Y"
    N = "N"

class AccessResponseGenderEnum(str, Enum):
    M = "M"
    F = "F"
    T = "T"


@dataclass_json
@dataclass
class AccessResponse:
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    digilocker_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('digilocker_id') }})
    dob: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dob') }})
    eaadhar: AccessResponseEaadharEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eaadhar') }})
    expires_in: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    gender: AccessResponseGenderEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reference_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference_key') }})
    refresh_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    scope: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    token_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    
