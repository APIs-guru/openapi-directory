from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionProxyConfigurationDetails:
    r"""AwsEcsTaskDefinitionProxyConfigurationDetails
    The configuration details for the App Mesh proxy.
    """
    
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerName') }})
    proxy_configuration_properties: Optional[List[AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProxyConfigurationProperties') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
