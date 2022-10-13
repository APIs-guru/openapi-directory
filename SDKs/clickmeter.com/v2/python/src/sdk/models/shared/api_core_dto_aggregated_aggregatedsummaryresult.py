from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import api_core_dto_aggregated_aggregatedresult


@dataclass_json
@dataclass
class APICoreDtoAggregatedAggregatedSummaryResult:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    result: Optional[List[api_core_dto_aggregated_aggregatedresult.APICoreDtoAggregatedAggregatedResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
