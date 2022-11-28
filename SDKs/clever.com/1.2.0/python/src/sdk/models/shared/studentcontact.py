from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StudentContact:
    district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('district') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    phone_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_type') }})
    relationship: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationship') }})
    sis_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sis_id') }})
    student: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('student') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
