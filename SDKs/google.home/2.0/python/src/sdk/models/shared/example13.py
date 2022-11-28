from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Example13:
    can_enroll: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_enroll') }})
    enrollment_state: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrollment_state') }})
    error_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_code') }})
    ready: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ready') }})
    retryable: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryable') }})
    
