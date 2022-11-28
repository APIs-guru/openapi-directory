from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceHealthSummary:
    r"""InstanceHealthSummary
    Describes information about the health of the instance.
    """
    
    instance_health: Optional[InstanceHealthStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceHealth') }})
    instance_health_reason: Optional[InstanceHealthReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceHealthReason') }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    
