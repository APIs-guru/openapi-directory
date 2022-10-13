from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DimensionKeyDescription:
    dimensions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimensions' }})
    partitions: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Partitions' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Total' }})
    
