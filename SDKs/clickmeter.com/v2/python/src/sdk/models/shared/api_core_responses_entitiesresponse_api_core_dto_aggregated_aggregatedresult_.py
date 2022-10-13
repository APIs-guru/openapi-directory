from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import api_core_dto_aggregated_aggregatedresult


@dataclass_json
@dataclass
class APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult:
    entities: Optional[List[api_core_dto_aggregated_aggregatedresult.APICoreDtoAggregatedAggregatedResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    
