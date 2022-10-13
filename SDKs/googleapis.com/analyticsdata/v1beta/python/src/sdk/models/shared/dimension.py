from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dimensionexpression


@dataclass_json
@dataclass
class Dimension:
    dimension_expression: Optional[dimensionexpression.DimensionExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionExpression' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
