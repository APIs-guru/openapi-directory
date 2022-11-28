from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnumOptionRequestInput:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    insert_after: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insert_after') }})
    insert_before: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insert_before') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
