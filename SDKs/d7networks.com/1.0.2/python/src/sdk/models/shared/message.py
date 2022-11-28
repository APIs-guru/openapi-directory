from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Message:
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    from_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
