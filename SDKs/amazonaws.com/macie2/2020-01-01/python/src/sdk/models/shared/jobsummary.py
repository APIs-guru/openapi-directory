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
class JobSummary:
    r"""JobSummary
    Provides information about a classification job, including the current status of the job.
    """
    
    bucket_criteria: Optional[S3BucketCriteriaForJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCriteria') }})
    bucket_definitions: Optional[List[S3BucketDefinitionForJob]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketDefinitions') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    job_status: Optional[JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobStatus') }})
    job_type: Optional[JobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobType') }})
    last_run_error_status: Optional[LastRunErrorStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRunErrorStatus') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    user_paused_details: Optional[UserPausedDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPausedDetails') }})
    
