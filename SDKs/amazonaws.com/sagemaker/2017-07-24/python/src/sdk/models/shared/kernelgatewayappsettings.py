from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customimage
from . import resourcespec


@dataclass_json
@dataclass
class KernelGatewayAppSettings:
    custom_images: Optional[List[customimage.CustomImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomImages' }})
    default_resource_spec: Optional[resourcespec.ResourceSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultResourceSpec' }})
    lifecycle_config_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifecycleConfigArns' }})
    
