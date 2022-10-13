from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1advancedapiopsconfig
from . import googlecloudapigeev1apisecurityconfig
from . import googlecloudapigeev1connectorsplatformconfig
from . import googlecloudapigeev1integrationconfig
from . import googlecloudapigeev1monetizationconfig


@dataclass_json
@dataclass
class GoogleCloudApigeeV1AddonsConfig:
    advanced_api_ops_config: Optional[googlecloudapigeev1advancedapiopsconfig.GoogleCloudApigeeV1AdvancedAPIOpsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advancedApiOpsConfig' }})
    api_security_config: Optional[googlecloudapigeev1apisecurityconfig.GoogleCloudApigeeV1APISecurityConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiSecurityConfig' }})
    connectors_platform_config: Optional[googlecloudapigeev1connectorsplatformconfig.GoogleCloudApigeeV1ConnectorsPlatformConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorsPlatformConfig' }})
    integration_config: Optional[googlecloudapigeev1integrationconfig.GoogleCloudApigeeV1IntegrationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationConfig' }})
    monetization_config: Optional[googlecloudapigeev1monetizationconfig.GoogleCloudApigeeV1MonetizationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monetizationConfig' }})
    
