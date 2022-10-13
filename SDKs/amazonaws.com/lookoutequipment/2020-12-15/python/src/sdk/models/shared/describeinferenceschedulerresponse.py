from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inferenceinputconfiguration
from . import inferenceoutputconfiguration
from . import datauploadfrequency_enum
from . import inferenceschedulerstatus_enum


@dataclass_json
@dataclass
class DescribeInferenceSchedulerResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_delay_offset_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataDelayOffsetInMinutes' }})
    data_input_configuration: Optional[inferenceinputconfiguration.InferenceInputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataInputConfiguration' }})
    data_output_configuration: Optional[inferenceoutputconfiguration.InferenceOutputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataOutputConfiguration' }})
    data_upload_frequency: Optional[datauploadfrequency_enum.DataUploadFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataUploadFrequency' }})
    inference_scheduler_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSchedulerArn' }})
    inference_scheduler_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSchedulerName' }})
    model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelArn' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    server_side_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerSideKmsKeyId' }})
    status: Optional[inferenceschedulerstatus_enum.InferenceSchedulerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
