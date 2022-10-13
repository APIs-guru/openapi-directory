from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jobstatus_enum
from . import jobtype_enum
from . import lastrunerrorstatus
from . import manageddataidentifierselector_enum
from . import s3jobdefinition
from . import jobschedulefrequency
from . import statistics
from . import userpauseddetails


@dataclass_json
@dataclass
class DescribeClassificationJobResponse:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_data_identifier_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customDataIdentifierIds' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    initial_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialRun' }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobArn' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    job_status: Optional[jobstatus_enum.JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobStatus' }})
    job_type: Optional[jobtype_enum.JobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobType' }})
    last_run_error_status: Optional[lastrunerrorstatus.LastRunErrorStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRunErrorStatus' }})
    last_run_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRunTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    managed_data_identifier_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedDataIdentifierIds' }})
    managed_data_identifier_selector: Optional[manageddataidentifierselector_enum.ManagedDataIdentifierSelectorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedDataIdentifierSelector' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    s3_job_definition: Optional[s3jobdefinition.S3JobDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3JobDefinition' }})
    sampling_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samplingPercentage' }})
    schedule_frequency: Optional[jobschedulefrequency.JobScheduleFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleFrequency' }})
    statistics: Optional[statistics.Statistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    user_paused_details: Optional[userpauseddetails.UserPausedDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPausedDetails' }})
    
