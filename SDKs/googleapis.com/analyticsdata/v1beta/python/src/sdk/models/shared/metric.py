from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Metric:
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expression' }})
    invisible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invisible' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
