from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateInferenceSchedulerRequest:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    data_input_configuration: InferenceInputConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataInputConfiguration') }})
    data_output_configuration: InferenceOutputConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataOutputConfiguration') }})
    data_upload_frequency: DataUploadFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataUploadFrequency') }})
    inference_scheduler_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerName') }})
    model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    data_delay_offset_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataDelayOffsetInMinutes') }})
    server_side_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerSideKmsKeyId') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
