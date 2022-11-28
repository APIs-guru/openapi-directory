from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class ApigatewayAPIConfigInput:
    r"""ApigatewayAPIConfigInput
    An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gateway_config: Optional[ApigatewayGatewayConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayConfig') }})
    gateway_service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayServiceAccount') }})
    grpc_services: Optional[List[ApigatewayAPIConfigGrpcServiceDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcServices') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    managed_service_configs: Optional[List[ApigatewayAPIConfigFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedServiceConfigs') }})
    openapi_documents: Optional[List[ApigatewayAPIConfigOpenAPIDocument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openapiDocuments') }})
    

@dataclass_json
@dataclass
class ApigatewayAPIConfig:
    r"""ApigatewayAPIConfig
    An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gateway_config: Optional[ApigatewayGatewayConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayConfig') }})
    gateway_service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayServiceAccount') }})
    grpc_services: Optional[List[ApigatewayAPIConfigGrpcServiceDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcServices') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    managed_service_configs: Optional[List[ApigatewayAPIConfigFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedServiceConfigs') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    openapi_documents: Optional[List[ApigatewayAPIConfigOpenAPIDocument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openapiDocuments') }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    state: Optional[ApigatewayAPIConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
