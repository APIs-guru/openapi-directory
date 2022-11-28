from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SQLRunConfiguration:
    r"""SQLRunConfiguration
    Describes the starting parameters for a SQL-based Kinesis Data Analytics application.
    """
    
    input_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputId') }})
    input_starting_position_configuration: InputStartingPositionConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputStartingPositionConfiguration') }})
    
