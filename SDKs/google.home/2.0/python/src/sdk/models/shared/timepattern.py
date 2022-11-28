from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimePattern:
    hour: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hour') }})
    minute: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minute') }})
    second: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('second') }})
    
