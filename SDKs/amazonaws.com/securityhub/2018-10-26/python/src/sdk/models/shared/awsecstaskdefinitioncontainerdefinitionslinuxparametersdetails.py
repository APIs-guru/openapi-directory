from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails
    &gt;Linux-specific modifications that are applied to the container, such as Linux kernel capabilities.
    """
    
    capabilities: Optional[AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Capabilities') }})
    devices: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Devices') }})
    init_process_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitProcessEnabled') }})
    max_swap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxSwap') }})
    shared_memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedMemorySize') }})
    swappiness: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Swappiness') }})
    tmpfs: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tmpfs') }})
    
