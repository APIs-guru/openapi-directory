from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetInventoryRequest:
    aggregators: Optional[List[InventoryAggregator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aggregators') }})
    filters: Optional[List[InventoryFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    result_attributes: Optional[List[ResultAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultAttributes') }})
    
