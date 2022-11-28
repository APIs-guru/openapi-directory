from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Name:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    middle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle') }})
    
