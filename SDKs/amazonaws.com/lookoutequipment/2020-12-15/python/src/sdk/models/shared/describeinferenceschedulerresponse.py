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
class DescribeInferenceSchedulerResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_delay_offset_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataDelayOffsetInMinutes') }})
    data_input_configuration: Optional[InferenceInputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataInputConfiguration') }})
    data_output_configuration: Optional[InferenceOutputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataOutputConfiguration') }})
    data_upload_frequency: Optional[DataUploadFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataUploadFrequency') }})
    inference_scheduler_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerArn') }})
    inference_scheduler_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerName') }})
    model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelArn') }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    server_side_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerSideKmsKeyId') }})
    status: Optional[InferenceSchedulerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
