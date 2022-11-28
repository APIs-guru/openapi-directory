from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1AddonsConfigInput:
    r"""GoogleCloudApigeeV1AddonsConfigInput
    Add-on configurations for the Apigee organization.
    """
    
    advanced_api_ops_config: Optional[GoogleCloudApigeeV1AdvancedAPIOpsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advancedApiOpsConfig') }})
    api_security_config: Optional[GoogleCloudApigeeV1APISecurityConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiSecurityConfig') }})
    connectors_platform_config: Optional[GoogleCloudApigeeV1ConnectorsPlatformConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorsPlatformConfig') }})
    integration_config: Optional[GoogleCloudApigeeV1IntegrationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationConfig') }})
    monetization_config: Optional[GoogleCloudApigeeV1MonetizationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monetizationConfig') }})
    
