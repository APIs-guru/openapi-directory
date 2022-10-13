from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inferenceinputconfiguration
from . import inferenceoutputconfiguration
from . import datauploadfrequency_enum


@dataclass_json
@dataclass
class UpdateInferenceSchedulerRequest:
    data_delay_offset_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataDelayOffsetInMinutes' }})
    data_input_configuration: Optional[inferenceinputconfiguration.InferenceInputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataInputConfiguration' }})
    data_output_configuration: Optional[inferenceoutputconfiguration.InferenceOutputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataOutputConfiguration' }})
    data_upload_frequency: Optional[datauploadfrequency_enum.DataUploadFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataUploadFrequency' }})
    inference_scheduler_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSchedulerName' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    
