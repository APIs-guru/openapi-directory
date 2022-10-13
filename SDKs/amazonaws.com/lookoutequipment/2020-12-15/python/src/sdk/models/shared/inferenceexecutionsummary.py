from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import s3object
from . import inferenceinputconfiguration
from . import inferenceoutputconfiguration
from . import inferenceexecutionstatus_enum


@dataclass_json
@dataclass
class InferenceExecutionSummary:
    customer_result_object: Optional[s3object.S3Object] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerResultObject' }})
    data_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_input_configuration: Optional[inferenceinputconfiguration.InferenceInputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataInputConfiguration' }})
    data_output_configuration: Optional[inferenceoutputconfiguration.InferenceOutputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataOutputConfiguration' }})
    data_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failed_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedReason' }})
    inference_scheduler_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSchedulerArn' }})
    inference_scheduler_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSchedulerName' }})
    model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelArn' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    scheduled_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[inferenceexecutionstatus_enum.InferenceExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
