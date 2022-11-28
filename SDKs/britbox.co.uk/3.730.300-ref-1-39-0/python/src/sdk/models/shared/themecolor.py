from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ThemeColor:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    opacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opacity') }})
    
