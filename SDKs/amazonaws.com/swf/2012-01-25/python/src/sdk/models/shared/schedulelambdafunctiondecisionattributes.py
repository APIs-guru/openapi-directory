from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScheduleLambdaFunctionDecisionAttributes:
    control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'control' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startToCloseTimeout' }})
    
