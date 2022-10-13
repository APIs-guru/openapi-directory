from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import outpost


@dataclass_json
@dataclass
class CreateOutpostOutput:
    outpost: Optional[outpost.Outpost] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Outpost' }})
    
