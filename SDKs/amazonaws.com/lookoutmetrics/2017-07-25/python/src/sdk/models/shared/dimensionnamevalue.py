from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DimensionNameValue:
    dimension_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DimensionName' }})
    dimension_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DimensionValue' }})
    
