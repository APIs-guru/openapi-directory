from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inferenceinputnameconfiguration
from . import inferences3inputconfiguration


@dataclass_json
@dataclass
class InferenceInputConfiguration:
    inference_input_name_configuration: Optional[inferenceinputnameconfiguration.InferenceInputNameConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceInputNameConfiguration' }})
    input_time_zone_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputTimeZoneOffset' }})
    s3_input_configuration: Optional[inferences3inputconfiguration.InferenceS3InputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3InputConfiguration' }})
    
