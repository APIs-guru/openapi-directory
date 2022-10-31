from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateCanaryPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCanaryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateCanaryRequestBodyCode:
    handler: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Handler' }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Bucket' }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Key' }})
    s3_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Version' }})
    zip_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZipFile' }})
    

@dataclass_json
@dataclass
class UpdateCanaryRequestBodyRunConfig:
    active_tracing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveTracing' }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnvironmentVariables' }})
    memory_in_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemoryInMB' }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeoutInSeconds' }})
    

@dataclass_json
@dataclass
class UpdateCanaryRequestBodySchedule:
    duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationInSeconds' }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expression' }})
    

@dataclass_json
@dataclass
class UpdateCanaryRequestBodyVisualReference:
    base_canary_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaseCanaryRunId' }})
    base_screenshots: Optional[List[shared.BaseScreenshot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaseScreenshots' }})
    

@dataclass_json
@dataclass
class UpdateCanaryRequestBodyVpcConfig:
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    

@dataclass_json
@dataclass
class UpdateCanaryRequestBody:
    code: Optional[UpdateCanaryRequestBodyCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRoleArn' }})
    failure_retention_period_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureRetentionPeriodInDays' }})
    run_config: Optional[UpdateCanaryRequestBodyRunConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunConfig' }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuntimeVersion' }})
    schedule: Optional[UpdateCanaryRequestBodySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    success_retention_period_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuccessRetentionPeriodInDays' }})
    visual_reference: Optional[UpdateCanaryRequestBodyVisualReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VisualReference' }})
    vpc_config: Optional[UpdateCanaryRequestBodyVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    

@dataclass
class UpdateCanaryRequest:
    path_params: UpdateCanaryPathParams = field(default=None)
    headers: UpdateCanaryHeaders = field(default=None)
    request: UpdateCanaryRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCanaryResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_canary_response: Optional[dict[str, Any]] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
