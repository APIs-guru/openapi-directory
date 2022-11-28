from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InferenceSchedulerSummary:
    r"""InferenceSchedulerSummary
    Contains information about the specific inference scheduler, including data delay offset, model name and ARN, status, and so on. 
    """
    
    data_delay_offset_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataDelayOffsetInMinutes') }})
    data_upload_frequency: Optional[DataUploadFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataUploadFrequency') }})
    inference_scheduler_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerArn') }})
    inference_scheduler_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerName') }})
    model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelArn') }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    status: Optional[InferenceSchedulerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
