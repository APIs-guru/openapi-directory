from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AuthenticationErrorStatusEnum(str, Enum):
    ERROR = "error"


@dataclass_json
@dataclass
class AuthenticationError:
    error: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[AuthenticationErrorStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
