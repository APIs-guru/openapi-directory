from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import kernelgatewayimageconfig
from . import tag


@dataclass_json
@dataclass
class CreateAppImageConfigRequest:
    app_image_config_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppImageConfigName' }})
    kernel_gateway_image_config: Optional[kernelgatewayimageconfig.KernelGatewayImageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KernelGatewayImageConfig' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
