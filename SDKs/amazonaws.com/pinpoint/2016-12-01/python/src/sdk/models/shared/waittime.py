from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WaitTime:
    wait_for: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaitFor' }})
    wait_until: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaitUntil' }})
    
