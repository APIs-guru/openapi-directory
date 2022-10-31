from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateCanaryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateCanaryRequestBodyCode:
    handler: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Handler' }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Bucket' }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Key' }})
    s3_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Version' }})
    zip_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZipFile' }})
    

@dataclass_json
@dataclass
class CreateCanaryRequestBodyRunConfig:
    active_tracing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveTracing' }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnvironmentVariables' }})
    memory_in_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemoryInMB' }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeoutInSeconds' }})
    

@dataclass_json
@dataclass
class CreateCanaryRequestBodySchedule:
    duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationInSeconds' }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expression' }})
    

@dataclass_json
@dataclass
class CreateCanaryRequestBodyVpcConfig:
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    

@dataclass_json
@dataclass
class CreateCanaryRequestBody:
    artifact_s3_location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArtifactS3Location' }})
    code: CreateCanaryRequestBodyCode = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    execution_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRoleArn' }})
    failure_retention_period_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureRetentionPeriodInDays' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    run_config: Optional[CreateCanaryRequestBodyRunConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunConfig' }})
    runtime_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuntimeVersion' }})
    schedule: CreateCanaryRequestBodySchedule = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    success_retention_period_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuccessRetentionPeriodInDays' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_config: Optional[CreateCanaryRequestBodyVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    

@dataclass
class CreateCanaryRequest:
    headers: CreateCanaryHeaders = field(default=None)
    request: CreateCanaryRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCanaryResponse:
    content_type: str = field(default=None)
    create_canary_response: Optional[shared.CreateCanaryResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
