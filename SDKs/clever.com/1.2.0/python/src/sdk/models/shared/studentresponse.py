from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import student


@dataclass_json
@dataclass
class StudentResponse:
    data: Optional[student.Student] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
