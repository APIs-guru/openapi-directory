from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import credentials
from . import name


@dataclass_json
@dataclass
class Teacher:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    credentials: Optional[credentials.Credentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'district' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_modified' }})
    name: Optional[name.Name] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    school: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'school' }})
    schools: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schools' }})
    sis_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sis_id' }})
    state_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state_id' }})
    teacher_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teacher_number' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
