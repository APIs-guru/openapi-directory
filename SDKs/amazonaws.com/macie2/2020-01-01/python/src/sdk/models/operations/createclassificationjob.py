from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateClassificationJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
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
    bucket_criteria: Optional[shared.S3BucketCriteriaForJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketCriteria' }})
    bucket_definitions: Optional[List[shared.S3BucketDefinitionForJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketDefinitions' }})
    scoping: Optional[shared.Scoping] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoping' }})
    

@dataclass_json
@dataclass
class CreateClassificationJobRequestBodyScheduleFrequency:
    daily_schedule: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dailySchedule' }})
    monthly_schedule: Optional[shared.MonthlySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthlySchedule' }})
    weekly_schedule: Optional[shared.WeeklySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weeklySchedule' }})
    

@dataclass_json
@dataclass
class CreateClassificationJobRequestBody:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    custom_data_identifier_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customDataIdentifierIds' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    initial_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialRun' }})
    job_type: CreateClassificationJobRequestBodyJobTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobType' }})
    managed_data_identifier_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedDataIdentifierIds' }})
    managed_data_identifier_selector: Optional[CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedDataIdentifierSelector' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    s3_job_definition: CreateClassificationJobRequestBodyS3JobDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3JobDefinition' }})
    sampling_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samplingPercentage' }})
    schedule_frequency: Optional[CreateClassificationJobRequestBodyScheduleFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleFrequency' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateClassificationJobRequest:
    headers: CreateClassificationJobHeaders = field(default=None)
    request: CreateClassificationJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateClassificationJobResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_classification_job_response: Optional[shared.CreateClassificationJobResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
