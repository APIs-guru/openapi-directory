from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InferenceInputConfiguration:
    r"""InferenceInputConfiguration
    Specifies configuration information for the input data for the inference, including S3 location of input data.. 
    """
    
    inference_input_name_configuration: Optional[InferenceInputNameConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceInputNameConfiguration') }})
    input_time_zone_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputTimeZoneOffset') }})
    s3_input_configuration: Optional[InferenceS3InputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3InputConfiguration') }})
    
