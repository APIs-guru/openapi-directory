from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import automljobsecondarystatus_enum
from . import automljobstatus_enum
from . import automlpartialfailurereason


@dataclass_json
@dataclass
class AutoMlJobSummary:
    auto_ml_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobArn' }})
    auto_ml_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobName' }})
    auto_ml_job_secondary_status: automljobsecondarystatus_enum.AutoMlJobSecondaryStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobSecondaryStatus' }})
    auto_ml_job_status: automljobstatus_enum.AutoMlJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobStatus' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    last_modified_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    partial_failure_reasons: Optional[List[automlpartialfailurereason.AutoMlPartialFailureReason]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartialFailureReasons' }})
    
