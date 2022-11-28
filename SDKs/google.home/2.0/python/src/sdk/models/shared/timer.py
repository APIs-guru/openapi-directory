from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Timer:
    fire_time: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fire_time') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    original_duration: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_duration') }})
    status: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
