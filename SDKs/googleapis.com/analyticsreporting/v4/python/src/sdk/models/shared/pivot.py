from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionfilterclause
from . import dimension
from . import metric


@dataclass_json
@dataclass
class Pivot:
    dimension_filter_clauses: Optional[List[dimensionfilterclause.DimensionFilterClause]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionFilterClauses' }})
    dimensions: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    max_group_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxGroupCount' }})
    metrics: Optional[List[metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    start_group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startGroup' }})
    
