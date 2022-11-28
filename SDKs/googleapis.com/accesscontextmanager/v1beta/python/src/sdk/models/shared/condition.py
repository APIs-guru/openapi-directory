from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Condition:
    r"""Condition
    A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction.
    """
    
    device_policy: Optional[DevicePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    ip_subnetworks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipSubnetworks') }})
    members: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    negate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negate') }})
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    required_access_levels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredAccessLevels') }})
    
