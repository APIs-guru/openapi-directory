from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compute_enum


@dataclass_json
@dataclass
class ComputeType:
    name: Optional[compute_enum.ComputeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
