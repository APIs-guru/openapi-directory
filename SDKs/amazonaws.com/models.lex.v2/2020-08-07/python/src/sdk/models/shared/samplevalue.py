from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SampleValue:
    r"""SampleValue
    Defines one of the values for a slot type.
    """
    
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
