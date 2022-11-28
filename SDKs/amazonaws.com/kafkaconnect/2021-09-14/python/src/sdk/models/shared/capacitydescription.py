from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CapacityDescription:
    r"""CapacityDescription
    A description of the connector's capacity.
    """
    
    auto_scaling: Optional[AutoScalingDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScaling') }})
    provisioned_capacity: Optional[ProvisionedCapacityDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisionedCapacity') }})
    
