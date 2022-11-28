from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SchoolAdmin:
    credentials: Optional[Credentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('district') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[Name] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schools: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schools') }})
    staff_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staff_id') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
