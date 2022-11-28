from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UsageAllocation:
    r"""UsageAllocation
    <p>Usage allocations allow you to split usage into buckets by tags.</p> <p>Each UsageAllocation indicates the usage quantity for a specific set of tags.</p>
    """
    
    allocated_usage_quantity: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllocatedUsageQuantity') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
