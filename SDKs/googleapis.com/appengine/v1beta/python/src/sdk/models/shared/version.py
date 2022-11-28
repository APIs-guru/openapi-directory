from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VersionInboundServicesEnum(str, Enum):
    INBOUND_SERVICE_UNSPECIFIED = "INBOUND_SERVICE_UNSPECIFIED"
    INBOUND_SERVICE_MAIL = "INBOUND_SERVICE_MAIL"
    INBOUND_SERVICE_MAIL_BOUNCE = "INBOUND_SERVICE_MAIL_BOUNCE"
    INBOUND_SERVICE_XMPP_ERROR = "INBOUND_SERVICE_XMPP_ERROR"
    INBOUND_SERVICE_XMPP_MESSAGE = "INBOUND_SERVICE_XMPP_MESSAGE"
    INBOUND_SERVICE_XMPP_SUBSCRIBE = "INBOUND_SERVICE_XMPP_SUBSCRIBE"
    INBOUND_SERVICE_XMPP_PRESENCE = "INBOUND_SERVICE_XMPP_PRESENCE"
    INBOUND_SERVICE_CHANNEL_PRESENCE = "INBOUND_SERVICE_CHANNEL_PRESENCE"
    INBOUND_SERVICE_WARMUP = "INBOUND_SERVICE_WARMUP"

class VersionServingStatusEnum(str, Enum):
    SERVING_STATUS_UNSPECIFIED = "SERVING_STATUS_UNSPECIFIED"
    SERVING = "SERVING"
    STOPPED = "STOPPED"


@dataclass_json
@dataclass
class Version:
    r"""Version
    A Version resource is a specific set of source code and configuration files that are deployed into a service.
    """
    
    api_config: Optional[APIConfigHandler] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiConfig') }})
    app_engine_apis: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineApis') }})
    automatic_scaling: Optional[AutomaticScaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automaticScaling') }})
    basic_scaling: Optional[BasicScaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicScaling') }})
    beta_settings: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('betaSettings') }})
    build_env_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildEnvVariables') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    default_expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultExpiration') }})
    deployment: Optional[Deployment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    disk_usage_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskUsageBytes') }})
    endpoints_api_service: Optional[EndpointsAPIService] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointsApiService') }})
    entrypoint: Optional[Entrypoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entrypoint') }})
    env: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    env_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envVariables') }})
    error_handlers: Optional[List[ErrorHandler]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorHandlers') }})
    handlers: Optional[List[URLMap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handlers') }})
    health_check: Optional[HealthCheck] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    inbound_services: Optional[List[VersionInboundServicesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundServices') }})
    instance_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceClass') }})
    libraries: Optional[List[Library]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('libraries') }})
    liveness_check: Optional[LivenessCheck] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('livenessCheck') }})
    manual_scaling: Optional[ManualScaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualScaling') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[Network] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    nobuild_files_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nobuildFilesRegex') }})
    readiness_check: Optional[ReadinessCheck] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readinessCheck') }})
    resources: Optional[Resources] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    runtime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtime') }})
    runtime_api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeApiVersion') }})
    runtime_channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeChannel') }})
    runtime_main_executable_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeMainExecutablePath') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    serving_status: Optional[VersionServingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingStatus') }})
    threadsafe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threadsafe') }})
    version_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionUrl') }})
    vm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm') }})
    vpc_access_connector: Optional[VpcAccessConnector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcAccessConnector') }})
    zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zones') }})
    
