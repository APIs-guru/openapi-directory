from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import kernelgatewayimageconfig


@dataclass_json
@dataclass
class UpdateAppImageConfigRequest:
    app_image_config_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppImageConfigName' }})
    kernel_gateway_image_config: Optional[kernelgatewayimageconfig.KernelGatewayImageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KernelGatewayImageConfig' }})
    
