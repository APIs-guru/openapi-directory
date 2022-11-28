from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceEntry:
    r"""InstanceEntry
    Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation.
    """
    
    availability_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZone') }})
    instance_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    port_info_source: PortInfoSourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portInfoSource') }})
    source_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceName') }})
    user_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    
