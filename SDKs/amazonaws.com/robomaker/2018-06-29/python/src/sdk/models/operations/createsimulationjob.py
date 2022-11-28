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
class CreateSimulationJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateSimulationJobRequestBodyCompute:
    r"""CreateSimulationJobRequestBodyCompute
    Compute information for the simulation job.
    """
    
    simulation_unit_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationUnitLimit') }})
    
class CreateSimulationJobRequestBodyFailureBehaviorEnum(str, Enum):
    FAIL = "Fail"
    CONTINUE = "Continue"


@dataclass_json
@dataclass
class CreateSimulationJobRequestBodyLoggingConfig:
    r"""CreateSimulationJobRequestBodyLoggingConfig
    The logging configuration.
    """
    
    record_all_ros_topics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordAllRosTopics') }})
    

@dataclass_json
@dataclass
class CreateSimulationJobRequestBodyOutputLocation:
    r"""CreateSimulationJobRequestBodyOutputLocation
    The output location.
    """
    
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Bucket') }})
    s3_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Prefix') }})
    

@dataclass_json
@dataclass
class CreateSimulationJobRequestBodyVpcConfig:
    r"""CreateSimulationJobRequestBodyVpcConfig
    If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
    """
    
    assign_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignPublicIp') }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroups') }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    

@dataclass_json
@dataclass
class CreateSimulationJobRequestBody:
    iam_role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRole') }})
    max_job_duration_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxJobDurationInSeconds') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    compute: Optional[CreateSimulationJobRequestBodyCompute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compute') }})
    data_sources: Optional[List[shared.DataSourceConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSources') }})
    failure_behavior: Optional[CreateSimulationJobRequestBodyFailureBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureBehavior') }})
    logging_config: Optional[CreateSimulationJobRequestBodyLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    output_location: Optional[CreateSimulationJobRequestBodyOutputLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputLocation') }})
    robot_applications: Optional[List[shared.RobotApplicationConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotApplications') }})
    simulation_applications: Optional[List[shared.SimulationApplicationConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationApplications') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    vpc_config: Optional[CreateSimulationJobRequestBodyVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfig') }})
    

@dataclass
class CreateSimulationJobRequest:
    headers: CreateSimulationJobHeaders = field()
    request: CreateSimulationJobRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSimulationJobResponse:
    content_type: str = field()
    status_code: int = field()
    create_simulation_job_response: Optional[shared.CreateSimulationJobResponse] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
