from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import teacher


@dataclass_json
@dataclass
class TeacherResponse:
    data: Optional[teacher.Teacher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
