from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import opsaggregator
from . import opsfilter
from . import opsresultattribute


@dataclass_json
@dataclass
class GetOpsSummaryRequest:
    aggregators: Optional[List[opsaggregator.OpsAggregator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Aggregators' }})
    filters: Optional[List[opsfilter.OpsFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    result_attributes: Optional[List[opsresultattribute.OpsResultAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultAttributes' }})
    sync_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncName' }})
    
