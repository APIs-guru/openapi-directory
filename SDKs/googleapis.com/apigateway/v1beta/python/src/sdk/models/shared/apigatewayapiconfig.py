from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import apigatewaygatewayconfig
from . import apigatewayapiconfiggrpcservicedefinition
from . import apigatewayapiconfigfile
from . import apigatewayapiconfigopenapidocument

class ApigatewayAPIConfigStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    DELETING = "DELETING"
    UPDATING = "UPDATING"
    ACTIVATING = "ACTIVATING"


@dataclass_json
@dataclass
class ApigatewayAPIConfig:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    gateway_config: Optional[apigatewaygatewayconfig.ApigatewayGatewayConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayConfig' }})
    gateway_service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayServiceAccount' }})
    grpc_services: Optional[List[apigatewayapiconfiggrpcservicedefinition.ApigatewayAPIConfigGrpcServiceDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpcServices' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    managed_service_configs: Optional[List[apigatewayapiconfigfile.ApigatewayAPIConfigFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedServiceConfigs' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    openapi_documents: Optional[List[apigatewayapiconfigopenapidocument.ApigatewayAPIConfigOpenAPIDocument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openapiDocuments' }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceConfigId' }})
    state: Optional[ApigatewayAPIConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
