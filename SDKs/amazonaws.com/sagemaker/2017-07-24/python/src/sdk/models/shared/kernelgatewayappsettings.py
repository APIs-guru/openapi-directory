from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KernelGatewayAppSettings:
    r"""KernelGatewayAppSettings
    The KernelGateway app settings.
    """
    
    custom_images: Optional[List[CustomImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomImages') }})
    default_resource_spec: Optional[ResourceSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultResourceSpec') }})
    lifecycle_config_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifecycleConfigArns') }})
    
