from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Resource:
    r"""Resource
    A resource related to a finding.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    data_classification: Optional[DataClassificationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataClassification') }})
    details: Optional[ResourceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Details') }})
    partition: Optional[PartitionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Partition') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    resource_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceRole') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
