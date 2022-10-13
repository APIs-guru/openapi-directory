from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dimensiongroup


@dataclass_json
@dataclass
class MetricQuery:
    filter: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filter' }})
    group_by: Optional[dimensiongroup.DimensionGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupBy' }})
    metric: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metric' }})
    
