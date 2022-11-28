from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Verification:
    payload: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    reason: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    signature: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    verified: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    
