from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProvisionedCapacity:
    r"""ProvisionedCapacity
    Details about a connector's provisioned capacity.
    """
    
    mcu_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcuCount') }})
    worker_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerCount') }})
    
