from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import studentcontact


@dataclass_json
@dataclass
class StudentContactResponse:
    data: Optional[studentcontact.StudentContact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
