from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContinuousParameterRangeSpecification:
    max_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxValue' }})
    min_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinValue' }})
    
