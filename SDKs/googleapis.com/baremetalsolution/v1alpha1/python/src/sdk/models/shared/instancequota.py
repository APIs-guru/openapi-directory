from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InstanceQuota:
    r"""InstanceQuota
    A resource budget.
    """
    
    available_machine_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableMachineCount') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
