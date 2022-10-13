from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventoryaggregator
from . import inventoryfilter
from . import resultattribute


@dataclass_json
@dataclass
class GetInventoryRequest:
    aggregators: Optional[List[inventoryaggregator.InventoryAggregator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Aggregators' }})
    filters: Optional[List[inventoryfilter.InventoryFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    result_attributes: Optional[List[resultattribute.ResultAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultAttributes' }})
    
