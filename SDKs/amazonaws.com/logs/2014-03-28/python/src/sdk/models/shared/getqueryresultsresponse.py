from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resultfield
from . import querystatistics
from . import querystatus_enum


@dataclass_json
@dataclass
class GetQueryResultsResponse:
    results: Optional[List[List[resultfield.ResultField]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    statistics: Optional[querystatistics.QueryStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    status: Optional[querystatus_enum.QueryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
