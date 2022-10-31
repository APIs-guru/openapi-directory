from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateEnvironmentPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'Name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEnvironmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateEnvironmentRequestBodyLoggingConfiguration:
    dag_processing_logs: Optional[shared.ModuleLoggingConfigurationInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DagProcessingLogs' }})
    scheduler_logs: Optional[shared.ModuleLoggingConfigurationInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchedulerLogs' }})
    task_logs: Optional[shared.ModuleLoggingConfigurationInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskLogs' }})
    webserver_logs: Optional[shared.ModuleLoggingConfigurationInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebserverLogs' }})
    worker_logs: Optional[shared.ModuleLoggingConfigurationInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerLogs' }})
    

@dataclass_json
@dataclass
class CreateEnvironmentRequestBodyNetworkConfiguration:
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    
class CreateEnvironmentRequestBodyWebserverAccessModeEnum(str, Enum):
    PRIVATE_ONLY = "PRIVATE_ONLY"
    PUBLIC_ONLY = "PUBLIC_ONLY"


@dataclass_json
@dataclass
class CreateEnvironmentRequestBody:
    airflow_configuration_options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AirflowConfigurationOptions' }})
    airflow_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AirflowVersion' }})
    dag_s3_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DagS3Path' }})
    environment_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnvironmentClass' }})
    execution_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRoleArn' }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKey' }})
    logging_configuration: Optional[CreateEnvironmentRequestBodyLoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingConfiguration' }})
    max_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxWorkers' }})
    min_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinWorkers' }})
    network_configuration: CreateEnvironmentRequestBodyNetworkConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConfiguration' }})
    plugins_s3_object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PluginsS3ObjectVersion' }})
    plugins_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PluginsS3Path' }})
    requirements_s3_object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequirementsS3ObjectVersion' }})
    requirements_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequirementsS3Path' }})
    schedulers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedulers' }})
    source_bucket_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceBucketArn' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    webserver_access_mode: Optional[CreateEnvironmentRequestBodyWebserverAccessModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebserverAccessMode' }})
    weekly_maintenance_window_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeeklyMaintenanceWindowStart' }})
    

@dataclass
class CreateEnvironmentRequest:
    path_params: CreateEnvironmentPathParams = field(default=None)
    headers: CreateEnvironmentHeaders = field(default=None)
    request: CreateEnvironmentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateEnvironmentResponse:
    content_type: str = field(default=None)
    create_environment_output: Optional[shared.CreateEnvironmentOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
