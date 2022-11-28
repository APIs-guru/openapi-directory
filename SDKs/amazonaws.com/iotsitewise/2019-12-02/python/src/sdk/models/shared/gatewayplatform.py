from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GatewayPlatform:
    r"""GatewayPlatform
    Contains a gateway's platform information.
    """
    
    greengrass: Optional[Greengrass] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greengrass') }})
    greengrass_v2: Optional[GreengrassV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greengrassV2') }})
    
