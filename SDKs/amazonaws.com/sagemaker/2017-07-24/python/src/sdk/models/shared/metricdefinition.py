from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetricDefinition:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    regex: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Regex' }})
    
