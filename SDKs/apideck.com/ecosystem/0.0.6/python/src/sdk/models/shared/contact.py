from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Contact:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    linked_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linked_in') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    twitter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twitter') }})
    
