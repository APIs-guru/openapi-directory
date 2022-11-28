from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartInferenceSchedulerResponse:
    inference_scheduler_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerArn') }})
    inference_scheduler_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerName') }})
    model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelArn') }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    status: Optional[InferenceSchedulerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
