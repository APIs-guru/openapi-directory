from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataQualityJobInput:
    r"""DataQualityJobInput
    The input for the data quality monitoring job. Currently endpoints are supported for input.
    """
    
    endpoint_input: EndpointInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointInput') }})
    
