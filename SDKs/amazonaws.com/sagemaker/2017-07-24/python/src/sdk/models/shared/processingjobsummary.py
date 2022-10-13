from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import processingjobstatus_enum


@dataclass_json
@dataclass
class ProcessingJobSummary:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    exit_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExitMessage' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    processing_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    processing_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingJobArn' }})
    processing_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingJobName' }})
    processing_job_status: processingjobstatus_enum.ProcessingJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingJobStatus' }})
    
