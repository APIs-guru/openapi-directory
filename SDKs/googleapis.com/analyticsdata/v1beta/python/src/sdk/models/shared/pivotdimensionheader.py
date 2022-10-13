from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue


@dataclass_json
@dataclass
class PivotDimensionHeader:
    dimension_values: Optional[List[dimensionvalue.DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionValues' }})
    
