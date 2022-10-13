from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import stage


@dataclass_json
@dataclass
class Plan:
    stages: List[stage.Stage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Stages' }})
    
