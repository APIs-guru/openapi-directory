from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetOpsSummaryRequest:
    aggregators: Optional[List[OpsAggregator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aggregators') }})
    filters: Optional[List[OpsFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    result_attributes: Optional[List[OpsResultAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultAttributes') }})
    sync_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncName') }})
    
