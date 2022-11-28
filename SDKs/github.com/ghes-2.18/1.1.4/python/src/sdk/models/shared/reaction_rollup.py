from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReactionRollup:
    plus_1: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('+1') }})
    minus_1: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('-1') }})
    confused: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confused') }})
    eyes: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eyes') }})
    heart: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('heart') }})
    hooray: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooray') }})
    laugh: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('laugh') }})
    rocket: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rocket') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
