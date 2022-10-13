from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDeploymentJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateDeploymentJobRequestBodyDeploymentConfig:
    concurrent_deployment_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concurrentDeploymentPercentage' }})
    download_condition_file: Optional[shared.S3Object] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadConditionFile' }})
    failure_threshold_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureThresholdPercentage' }})
    robot_deployment_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robotDeploymentTimeoutInSeconds' }})
    

@dataclass_json
@dataclass
class CreateDeploymentJobRequestBody:
    client_request_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    deployment_application_configs: List[shared.DeploymentApplicationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentApplicationConfigs' }})
    deployment_config: Optional[CreateDeploymentJobRequestBodyDeploymentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentConfig' }})
    fleet: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fleet' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateDeploymentJobRequest:
    headers: CreateDeploymentJobHeaders = field(default=None)
    request: CreateDeploymentJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeploymentJobResponse:
    concurrent_deployment_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_deployment_job_response: Optional[shared.CreateDeploymentJobResponse] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
