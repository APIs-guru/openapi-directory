from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import distribution


@dataclass_json
@dataclass
class MetricDistribution:
    basis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basis' }})
    data: Optional[List[distribution.Distribution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
