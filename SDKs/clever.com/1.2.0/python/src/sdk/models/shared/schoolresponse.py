from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import school


@dataclass_json
@dataclass
class SchoolResponse:
    data: Optional[school.School] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
