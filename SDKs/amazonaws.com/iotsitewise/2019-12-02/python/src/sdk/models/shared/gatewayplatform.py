from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import greengrass
from . import greengrassv2


@dataclass_json
@dataclass
class GatewayPlatform:
    greengrass: Optional[greengrass.Greengrass] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greengrass' }})
    greengrass_v2: Optional[greengrassv2.GreengrassV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greengrassV2' }})
    
