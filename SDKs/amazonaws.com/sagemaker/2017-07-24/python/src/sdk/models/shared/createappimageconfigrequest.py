from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateAppImageConfigRequest:
    app_image_config_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppImageConfigName') }})
    kernel_gateway_image_config: Optional[KernelGatewayImageConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KernelGatewayImageConfig') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
