from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inputstartingposition_enum


@dataclass_json
@dataclass
class InputStartingPositionConfiguration:
    input_starting_position: Optional[inputstartingposition_enum.InputStartingPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputStartingPosition' }})
    
