from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inferenceschedulerstatus_enum


@dataclass_json
@dataclass
class CreateInferenceSchedulerResponse:
    inference_scheduler_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSchedulerArn' }})
    inference_scheduler_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSchedulerName' }})
    status: Optional[inferenceschedulerstatus_enum.InferenceSchedulerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
