from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InvalidRequestStatusEnum(str, Enum):
    ERROR = "error"


@dataclass_json
@dataclass
class InvalidRequest:
    errors: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: InvalidRequestStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
