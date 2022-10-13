from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StudentContact:
    district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'district' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    phone_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_type' }})
    relationship: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationship' }})
    sis_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sis_id' }})
    student: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'student' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
