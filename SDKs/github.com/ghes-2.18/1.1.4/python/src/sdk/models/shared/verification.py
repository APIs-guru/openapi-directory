from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Verification:
    payload: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    signature: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    verified: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    
