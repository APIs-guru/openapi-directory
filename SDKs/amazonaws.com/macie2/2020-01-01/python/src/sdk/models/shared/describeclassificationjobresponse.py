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
class DescribeClassificationJobResponse:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_data_identifier_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDataIdentifierIds') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    initial_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialRun') }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobArn') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    job_status: Optional[JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobStatus') }})
    job_type: Optional[JobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobType') }})
    last_run_error_status: Optional[LastRunErrorStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRunErrorStatus') }})
    last_run_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRunTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    managed_data_identifier_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedDataIdentifierIds') }})
    managed_data_identifier_selector: Optional[ManagedDataIdentifierSelectorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedDataIdentifierSelector') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    s3_job_definition: Optional[S3JobDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3JobDefinition') }})
    sampling_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplingPercentage') }})
    schedule_frequency: Optional[JobScheduleFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleFrequency') }})
    statistics: Optional[Statistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    user_paused_details: Optional[UserPausedDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPausedDetails') }})
    
