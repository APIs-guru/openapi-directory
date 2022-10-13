from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dimensionvaluetype_enum


@dataclass_json
@dataclass
class Dimension:
    dimension_value_type: Optional[dimensionvaluetype_enum.DimensionValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DimensionValueType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
