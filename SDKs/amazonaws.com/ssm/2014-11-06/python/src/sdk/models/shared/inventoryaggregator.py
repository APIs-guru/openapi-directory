from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InventoryAggregator:
    r"""InventoryAggregator
    Specifies the inventory type and attribute for the aggregation execution.
    """
    
    aggregators: Optional[List[InventoryAggregator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aggregators') }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expression') }})
    groups: Optional[List[InventoryGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Groups') }})
    
