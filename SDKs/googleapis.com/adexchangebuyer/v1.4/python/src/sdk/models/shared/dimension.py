from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensiondimensionvalue


@dataclass_json
@dataclass
class Dimension:
    dimension_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionType' }})
    dimension_values: Optional[List[dimensiondimensionvalue.DimensionDimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionValues' }})
    
