from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoMlJobSummary:
    r"""AutoMlJobSummary
    Provides a summary about an AutoML job.
    """
    
    auto_ml_job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobArn') }})
    auto_ml_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobName') }})
    auto_ml_job_secondary_status: AutoMlJobSecondaryStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobSecondaryStatus') }})
    auto_ml_job_status: AutoMlJobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobStatus') }})
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    partial_failure_reasons: Optional[List[AutoMlPartialFailureReason]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartialFailureReasons') }})
    
