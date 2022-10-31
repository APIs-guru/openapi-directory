from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateEnvironmentPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'Name', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEnvironmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateEnvironmentRequestBodyLoggingConfiguration:
    dag_processing_logs: Optional[shared.ModuleLoggingConfigurationInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DagProcessingLogs' }})
    scheduler_logs: Optional[shared.ModuleLoggingConfigurationInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchedulerLogs' }})
    task_logs: Optional[shared.ModuleLoggingConfigurationInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskLogs' }})
    webserver_logs: Optional[shared.ModuleLoggingConfigurationInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebserverLogs' }})
    worker_logs: Optional[shared.ModuleLoggingConfigurationInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerLogs' }})
    

@dataclass_json
@dataclass
class UpdateEnvironmentRequestBodyNetworkConfiguration:
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    
class UpdateEnvironmentRequestBodyWebserverAccessModeEnum(str, Enum):
    PRIVATE_ONLY = "PRIVATE_ONLY"
    PUBLIC_ONLY = "PUBLIC_ONLY"


@dataclass_json
@dataclass
class UpdateEnvironmentRequestBody:
    airflow_configuration_options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AirflowConfigurationOptions' }})
    airflow_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AirflowVersion' }})
    dag_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DagS3Path' }})
    environment_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnvironmentClass' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRoleArn' }})
    logging_configuration: Optional[UpdateEnvironmentRequestBodyLoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingConfiguration' }})
    max_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxWorkers' }})
    min_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinWorkers' }})
    network_configuration: Optional[UpdateEnvironmentRequestBodyNetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConfiguration' }})
    plugins_s3_object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PluginsS3ObjectVersion' }})
    plugins_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PluginsS3Path' }})
    requirements_s3_object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequirementsS3ObjectVersion' }})
    requirements_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequirementsS3Path' }})
    schedulers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedulers' }})
    source_bucket_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceBucketArn' }})
    webserver_access_mode: Optional[UpdateEnvironmentRequestBodyWebserverAccessModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebserverAccessMode' }})
    weekly_maintenance_window_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeeklyMaintenanceWindowStart' }})
    

@dataclass
class UpdateEnvironmentRequest:
    path_params: UpdateEnvironmentPathParams = field(default=None)
    headers: UpdateEnvironmentHeaders = field(default=None)
    request: UpdateEnvironmentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEnvironmentResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_environment_output: Optional[shared.UpdateEnvironmentOutput] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
