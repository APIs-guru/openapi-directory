from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import processings3datadistributiontype_enum
from . import processings3inputmode_enum


@dataclass_json
@dataclass
class EndpointInput:
    end_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTimeOffset' }})
    endpoint_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointName' }})
    features_attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeaturesAttribute' }})
    inference_attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceAttribute' }})
    local_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalPath' }})
    probability_attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProbabilityAttribute' }})
    probability_threshold_attribute: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProbabilityThresholdAttribute' }})
    s3_data_distribution_type: Optional[processings3datadistributiontype_enum.ProcessingS3DataDistributionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DataDistributionType' }})
    s3_input_mode: Optional[processings3inputmode_enum.ProcessingS3InputModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3InputMode' }})
    start_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTimeOffset' }})
    
