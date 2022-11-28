from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimeStamp:
    nano_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nanoSeconds') }})
    seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('seconds') }})
    
