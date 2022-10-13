from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BasicScaling:
    idle_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idleTimeout' }})
    max_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxInstances' }})
    
