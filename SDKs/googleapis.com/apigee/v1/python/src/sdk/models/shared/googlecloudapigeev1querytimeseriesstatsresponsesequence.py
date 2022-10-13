from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence:
    dimensions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    points: Optional[List[List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    
