from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aggregatedvalue


@dataclass_json
@dataclass
class GetAssetPropertyAggregatesResponse:
    aggregated_values: List[aggregatedvalue.AggregatedValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregatedValues' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
