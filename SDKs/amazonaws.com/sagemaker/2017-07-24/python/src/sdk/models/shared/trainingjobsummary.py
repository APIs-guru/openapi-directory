from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import trainingjobstatus_enum


@dataclass_json
@dataclass
class TrainingJobSummary:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobArn' }})
    training_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobName' }})
    training_job_status: trainingjobstatus_enum.TrainingJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobStatus' }})
    
