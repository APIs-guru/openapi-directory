from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EndpointInput:
    r"""EndpointInput
    Input object for the endpoint
    """
    
    endpoint_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointName') }})
    local_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalPath') }})
    end_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTimeOffset') }})
    features_attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeaturesAttribute') }})
    inference_attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceAttribute') }})
    probability_attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProbabilityAttribute') }})
    probability_threshold_attribute: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProbabilityThresholdAttribute') }})
    s3_data_distribution_type: Optional[ProcessingS3DataDistributionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DataDistributionType') }})
    s3_input_mode: Optional[ProcessingS3InputModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3InputMode') }})
    start_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTimeOffset') }})
    
