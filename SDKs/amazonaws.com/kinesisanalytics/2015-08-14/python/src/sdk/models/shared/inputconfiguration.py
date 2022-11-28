from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InputConfiguration:
    r"""InputConfiguration
    When you start your application, you provide this configuration, which identifies the input source and the point in the input source at which you want the application to start processing records.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    input_starting_position_configuration: InputStartingPositionConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputStartingPositionConfiguration') }})
    
