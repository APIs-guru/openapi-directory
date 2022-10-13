from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import s3bucketcriteriaforjob
from . import s3bucketdefinitionforjob
from . import jobstatus_enum
from . import jobtype_enum
from . import lastrunerrorstatus
from . import userpauseddetails


@dataclass_json
@dataclass
class JobSummary:
    bucket_criteria: Optional[s3bucketcriteriaforjob.S3BucketCriteriaForJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketCriteria' }})
    bucket_definitions: Optional[List[s3bucketdefinitionforjob.S3BucketDefinitionForJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketDefinitions' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    job_status: Optional[jobstatus_enum.JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobStatus' }})
    job_type: Optional[jobtype_enum.JobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobType' }})
    last_run_error_status: Optional[lastrunerrorstatus.LastRunErrorStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRunErrorStatus' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    user_paused_details: Optional[userpauseddetails.UserPausedDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPausedDetails' }})
    
