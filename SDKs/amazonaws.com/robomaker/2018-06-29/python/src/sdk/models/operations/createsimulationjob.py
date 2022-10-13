from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateSimulationJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateSimulationJobRequestBodyCompute:
    simulation_unit_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simulationUnitLimit' }})
    
class CreateSimulationJobRequestBodyFailureBehaviorEnum(str, Enum):
    FAIL = "Fail"
    CONTINUE = "Continue"


@dataclass_json
@dataclass
class CreateSimulationJobRequestBodyLoggingConfig:
    record_all_ros_topics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordAllRosTopics' }})
    

@dataclass_json
@dataclass
class CreateSimulationJobRequestBodyOutputLocation:
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Bucket' }})
    s3_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Prefix' }})
    

@dataclass_json
@dataclass
class CreateSimulationJobRequestBodyVpcConfig:
    assign_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignPublicIp' }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroups' }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    

@dataclass_json
@dataclass
class CreateSimulationJobRequestBody:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    compute: Optional[CreateSimulationJobRequestBodyCompute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compute' }})
    data_sources: Optional[List[shared.DataSourceConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSources' }})
    failure_behavior: Optional[CreateSimulationJobRequestBodyFailureBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureBehavior' }})
    iam_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamRole' }})
    logging_config: Optional[CreateSimulationJobRequestBodyLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfig' }})
    max_job_duration_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxJobDurationInSeconds' }})
    output_location: Optional[CreateSimulationJobRequestBodyOutputLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputLocation' }})
    robot_applications: Optional[List[shared.RobotApplicationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robotApplications' }})
    simulation_applications: Optional[List[shared.SimulationApplicationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simulationApplications' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    vpc_config: Optional[CreateSimulationJobRequestBodyVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcConfig' }})
    

@dataclass
class CreateSimulationJobRequest:
    headers: CreateSimulationJobHeaders = field(default=None)
    request: CreateSimulationJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSimulationJobResponse:
    content_type: str = field(default=None)
    create_simulation_job_response: Optional[shared.CreateSimulationJobResponse] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
