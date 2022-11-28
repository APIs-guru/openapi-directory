from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContainerServicePower:
    r"""ContainerServicePower
    <p>Describes the powers that can be specified for an Amazon Lightsail container service.</p> <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.</p>
    """
    
    cpu_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuCount') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isActive') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    power_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerId') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    ram_size_in_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ramSizeInGb') }})
    
