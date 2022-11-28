from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProvisionedCapacityDescription:
    r"""ProvisionedCapacityDescription
    The description of a connector's provisioned capacity.
    """
    
    mcu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcuCount') }})
    worker_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerCount') }})
    
