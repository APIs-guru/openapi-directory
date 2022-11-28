from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateInferenceSchedulerRequest:
    inference_scheduler_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerName') }})
    data_delay_offset_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataDelayOffsetInMinutes') }})
    data_input_configuration: Optional[InferenceInputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataInputConfiguration') }})
    data_output_configuration: Optional[InferenceOutputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataOutputConfiguration') }})
    data_upload_frequency: Optional[DataUploadFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataUploadFrequency') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    
