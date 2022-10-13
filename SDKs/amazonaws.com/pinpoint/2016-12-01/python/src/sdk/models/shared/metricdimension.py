from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetricDimension:
    comparison_operator: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComparisonOperator' }})
    value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
