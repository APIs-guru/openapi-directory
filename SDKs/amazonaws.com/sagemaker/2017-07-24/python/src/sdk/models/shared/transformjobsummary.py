from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import transformjobstatus_enum


@dataclass_json
@dataclass
class TransformJobSummary:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transform_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transform_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformJobArn' }})
    transform_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformJobName' }})
    transform_job_status: transformjobstatus_enum.TransformJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformJobStatus' }})
    
