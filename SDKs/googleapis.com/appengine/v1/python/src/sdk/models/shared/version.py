from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import apiconfighandler
from . import automaticscaling
from . import basicscaling
from . import deployment
from . import endpointsapiservice
from . import entrypoint
from . import errorhandler
from . import urlmap
from . import healthcheck
from . import library
from . import livenesscheck
from . import manualscaling
from . import network
from . import readinesscheck
from . import resources
from . import vpcaccessconnector

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
    api_config: Optional[apiconfighandler.APIConfigHandler] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiConfig' }})
    app_engine_apis: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appEngineApis' }})
    automatic_scaling: Optional[automaticscaling.AutomaticScaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automaticScaling' }})
    basic_scaling: Optional[basicscaling.BasicScaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicScaling' }})
    beta_settings: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'betaSettings' }})
    build_env_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildEnvVariables' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    default_expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultExpiration' }})
    deployment: Optional[deployment.Deployment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployment' }})
    disk_usage_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskUsageBytes' }})
    endpoints_api_service: Optional[endpointsapiservice.EndpointsAPIService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointsApiService' }})
    entrypoint: Optional[entrypoint.Entrypoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entrypoint' }})
    env: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'env' }})
    env_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envVariables' }})
    error_handlers: Optional[List[errorhandler.ErrorHandler]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorHandlers' }})
    handlers: Optional[List[urlmap.URLMap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handlers' }})
    health_check: Optional[healthcheck.HealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheck' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    inbound_services: Optional[List[VersionInboundServicesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inboundServices' }})
    instance_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceClass' }})
    libraries: Optional[List[library.Library]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'libraries' }})
    liveness_check: Optional[livenesscheck.LivenessCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'livenessCheck' }})
    manual_scaling: Optional[manualscaling.ManualScaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manualScaling' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network: Optional[network.Network] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    nobuild_files_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nobuildFilesRegex' }})
    readiness_check: Optional[readinesscheck.ReadinessCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readinessCheck' }})
    resources: Optional[resources.Resources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    runtime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtime' }})
    runtime_api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeApiVersion' }})
    runtime_channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeChannel' }})
    runtime_main_executable_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeMainExecutablePath' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    serving_status: Optional[VersionServingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servingStatus' }})
    threadsafe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threadsafe' }})
    version_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionUrl' }})
    vm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vm' }})
    vpc_access_connector: Optional[vpcaccessconnector.VpcAccessConnector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcAccessConnector' }})
    zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zones' }})
    
