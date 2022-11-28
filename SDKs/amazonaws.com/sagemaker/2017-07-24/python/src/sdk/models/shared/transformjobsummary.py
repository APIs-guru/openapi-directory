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
class TransformJobSummary:
    r"""TransformJobSummary
    Provides a summary of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a list after in response to a <a>ListTransformJobs</a> call.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transform_job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformJobArn') }})
    transform_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformJobName') }})
    transform_job_status: TransformJobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformJobStatus') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transform_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
