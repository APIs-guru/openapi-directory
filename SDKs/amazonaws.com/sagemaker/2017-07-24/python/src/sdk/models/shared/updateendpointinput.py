from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deploymentconfig
from . import variantproperty


@dataclass_json
@dataclass
class UpdateEndpointInput:
    deployment_config: Optional[deploymentconfig.DeploymentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentConfig' }})
    endpoint_config_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointConfigName' }})
    endpoint_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointName' }})
    exclude_retained_variant_properties: Optional[List[variantproperty.VariantProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludeRetainedVariantProperties' }})
    retain_all_variant_properties: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetainAllVariantProperties' }})
    
