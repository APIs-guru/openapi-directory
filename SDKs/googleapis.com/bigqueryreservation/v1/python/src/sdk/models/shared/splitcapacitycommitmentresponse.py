from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import capacitycommitment
from . import capacitycommitment


@dataclass_json
@dataclass
class SplitCapacityCommitmentResponse:
    first: Optional[capacitycommitment.CapacityCommitment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    second: Optional[capacitycommitment.CapacityCommitment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'second' }})
    
