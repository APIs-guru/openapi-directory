from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RateLimit:
    limit: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    remaining: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remaining') }})
    reset: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset') }})
    
