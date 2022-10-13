from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TeamTalent:
    school: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'school' }})
    talent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'talent' }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
