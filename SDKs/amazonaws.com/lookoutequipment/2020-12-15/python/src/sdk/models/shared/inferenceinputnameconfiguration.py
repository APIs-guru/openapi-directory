from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InferenceInputNameConfiguration:
    r"""InferenceInputNameConfiguration
    Specifies configuration information for the input data for the inference, including timestamp format and delimiter. 
    """
    
    component_timestamp_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentTimestampDelimiter') }})
    timestamp_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimestampFormat') }})
    
