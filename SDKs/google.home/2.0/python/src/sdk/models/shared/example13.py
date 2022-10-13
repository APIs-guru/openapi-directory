from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Example13:
    can_enroll: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_enroll' }})
    enrollment_state: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enrollment_state' }})
    error_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_code' }})
    ready: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ready' }})
    retryable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryable' }})
    
