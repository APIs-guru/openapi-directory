from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonitoringInput:
    r"""MonitoringInput
    The inputs for a monitoring job.
    """
    
    endpoint_input: EndpointInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointInput') }})
    
