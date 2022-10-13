from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import inputstartingpositionconfiguration


@dataclass_json
@dataclass
class InputConfiguration:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    input_starting_position_configuration: inputstartingpositionconfiguration.InputStartingPositionConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputStartingPositionConfiguration' }})
    
