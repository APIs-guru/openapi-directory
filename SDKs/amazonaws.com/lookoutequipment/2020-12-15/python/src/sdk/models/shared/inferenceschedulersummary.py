from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datauploadfrequency_enum
from . import inferenceschedulerstatus_enum


@dataclass_json
@dataclass
class InferenceSchedulerSummary:
    data_delay_offset_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataDelayOffsetInMinutes' }})
    data_upload_frequency: Optional[datauploadfrequency_enum.DataUploadFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataUploadFrequency' }})
    inference_scheduler_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSchedulerArn' }})
    inference_scheduler_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSchedulerName' }})
    model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelArn' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    status: Optional[inferenceschedulerstatus_enum.InferenceSchedulerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
