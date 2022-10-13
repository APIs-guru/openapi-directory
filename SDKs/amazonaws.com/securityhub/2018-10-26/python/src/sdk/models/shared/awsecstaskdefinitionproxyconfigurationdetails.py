from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsecstaskdefinitionproxyconfigurationproxyconfigurationpropertiesdetails


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionProxyConfigurationDetails:
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerName' }})
    proxy_configuration_properties: Optional[List[awsecstaskdefinitionproxyconfigurationproxyconfigurationpropertiesdetails.AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProxyConfigurationProperties' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
