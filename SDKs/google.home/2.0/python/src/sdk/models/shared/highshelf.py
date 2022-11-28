from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HighShelf:
    frequency: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    gain_db: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gain_db') }})
    quality: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    
