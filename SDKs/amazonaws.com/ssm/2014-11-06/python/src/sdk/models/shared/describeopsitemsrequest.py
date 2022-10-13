from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import opsitemfilter


@dataclass_json
@dataclass
class DescribeOpsItemsRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    ops_item_filters: Optional[List[opsitemfilter.OpsItemFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsItemFilters' }})
    
