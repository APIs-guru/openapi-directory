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
class InferenceExecutionSummary:
    r"""InferenceExecutionSummary
    Contains information about the specific inference execution, including input and output data configuration, inference scheduling information, status, and so on. 
    """
    
    customer_result_object: Optional[S3Object] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerResultObject') }})
    data_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_input_configuration: Optional[InferenceInputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataInputConfiguration') }})
    data_output_configuration: Optional[InferenceOutputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataOutputConfiguration') }})
    data_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failed_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedReason') }})
    inference_scheduler_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerArn') }})
    inference_scheduler_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerName') }})
    model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelArn') }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    scheduled_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[InferenceExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
