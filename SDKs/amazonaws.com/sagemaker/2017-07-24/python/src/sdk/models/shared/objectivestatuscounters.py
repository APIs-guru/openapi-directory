from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObjectiveStatusCounters:
    failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Failed' }})
    pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pending' }})
    succeeded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Succeeded' }})
    
