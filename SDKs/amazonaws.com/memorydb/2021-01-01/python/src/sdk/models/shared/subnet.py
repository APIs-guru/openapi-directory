from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Subnet:
    r"""Subnet
    Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with MemoryDB.
    """
    
    availability_zone: Optional[AvailabilityZone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identifier') }})
    
