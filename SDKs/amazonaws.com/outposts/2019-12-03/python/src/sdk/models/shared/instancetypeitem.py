from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InstanceTypeItem:
    r"""InstanceTypeItem
    Information about an instance type.
    """
    
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    
