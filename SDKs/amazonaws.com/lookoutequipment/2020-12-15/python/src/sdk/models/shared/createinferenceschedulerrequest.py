from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import inferenceinputconfiguration
from . import inferenceoutputconfiguration
from . import datauploadfrequency_enum
from . import tag


@dataclass_json
@dataclass
class CreateInferenceSchedulerRequest:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    data_delay_offset_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataDelayOffsetInMinutes' }})
    data_input_configuration: inferenceinputconfiguration.InferenceInputConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataInputConfiguration' }})
    data_output_configuration: inferenceoutputconfiguration.InferenceOutputConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataOutputConfiguration' }})
    data_upload_frequency: datauploadfrequency_enum.DataUploadFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataUploadFrequency' }})
    inference_scheduler_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSchedulerName' }})
    model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    server_side_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerSideKmsKeyId' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
