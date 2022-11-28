from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateClassificationJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateClassificationJobRequestBodyJobTypeEnum(str, Enum):
    ONE_TIME = "ONE_TIME"
    SCHEDULED = "SCHEDULED"

class CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum(str, Enum):
    ALL = "ALL"
    EXCLUDE = "EXCLUDE"
    INCLUDE = "INCLUDE"
    NONE = "NONE"


@dataclass_json
@dataclass
class CreateClassificationJobRequestBodyS3JobDefinition:
    r"""CreateClassificationJobRequestBodyS3JobDefinition
    Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
    """
    
    bucket_criteria: Optional[shared.S3BucketCriteriaForJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCriteria') }})
    bucket_definitions: Optional[List[shared.S3BucketDefinitionForJob]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketDefinitions') }})
    scoping: Optional[shared.Scoping] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoping') }})
    

@dataclass_json
@dataclass
class CreateClassificationJobRequestBodyScheduleFrequency:
    r"""CreateClassificationJobRequestBodyScheduleFrequency
    Specifies the recurrence pattern for running a classification job.
    """
    
    daily_schedule: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailySchedule') }})
    monthly_schedule: Optional[shared.MonthlySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthlySchedule') }})
    weekly_schedule: Optional[shared.WeeklySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklySchedule') }})
    

@dataclass_json
@dataclass
class CreateClassificationJobRequestBody:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    job_type: CreateClassificationJobRequestBodyJobTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobType') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    s3_job_definition: CreateClassificationJobRequestBodyS3JobDefinition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3JobDefinition') }})
    custom_data_identifier_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDataIdentifierIds') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    initial_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialRun') }})
    managed_data_identifier_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedDataIdentifierIds') }})
    managed_data_identifier_selector: Optional[CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedDataIdentifierSelector') }})
    sampling_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplingPercentage') }})
    schedule_frequency: Optional[CreateClassificationJobRequestBodyScheduleFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleFrequency') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateClassificationJobRequest:
    headers: CreateClassificationJobHeaders = field()
    request: CreateClassificationJobRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateClassificationJobResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_classification_job_response: Optional[shared.CreateClassificationJobResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
