from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import inputstartingpositionconfiguration


@dataclass_json
@dataclass
class SQLRunConfiguration:
    input_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputId' }})
    input_starting_position_configuration: inputstartingpositionconfiguration.InputStartingPositionConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputStartingPositionConfiguration' }})
    
