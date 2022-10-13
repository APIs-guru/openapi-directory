from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import program


@dataclass_json
@dataclass
class Programs:
    programs: Optional[List[program.Program]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'programs' }})
    
