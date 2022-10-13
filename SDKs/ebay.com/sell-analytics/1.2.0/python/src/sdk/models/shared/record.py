from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import value
from . import value


@dataclass_json
@dataclass
class Record:
    dimension_values: Optional[List[value.Value]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionValues' }})
    metric_values: Optional[List[value.Value]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricValues' }})
    
