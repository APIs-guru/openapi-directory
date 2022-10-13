from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateHeartbeat:
    application: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    took: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'took' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
