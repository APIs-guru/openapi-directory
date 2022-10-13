from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class RunnerLabelsTypeEnum(str, Enum):
    READ_ONLY = "read-only"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class RunnerLabels:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[RunnerLabelsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class Runner:
    busy: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'busy' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: List[RunnerLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
