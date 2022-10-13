from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LivenessCheck:
    check_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkInterval' }})
    failure_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureThreshold' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    initial_delay: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialDelay' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    success_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successThreshold' }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    
