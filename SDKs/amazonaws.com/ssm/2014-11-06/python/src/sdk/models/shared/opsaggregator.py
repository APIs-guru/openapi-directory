from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import opsaggregator
from . import opsfilter


@dataclass_json
@dataclass
class OpsAggregator:
    aggregator_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AggregatorType' }})
    aggregators: Optional[List[opsaggregator.OpsAggregator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Aggregators' }})
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeName' }})
    filters: Optional[List[opsfilter.OpsFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeName' }})
    values: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
