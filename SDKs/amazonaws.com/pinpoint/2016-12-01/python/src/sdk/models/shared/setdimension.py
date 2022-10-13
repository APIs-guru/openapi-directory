from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dimensiontype_enum


@dataclass_json
@dataclass
class SetDimension:
    dimension_type: Optional[dimensiontype_enum.DimensionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DimensionType' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
