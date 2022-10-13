from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EdgeModelSummary:
    model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    model_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelVersion' }})
    
