from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import teacherresponse


@dataclass_json
@dataclass
class TeachersResponse:
    data: Optional[List[teacherresponse.TeacherResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
