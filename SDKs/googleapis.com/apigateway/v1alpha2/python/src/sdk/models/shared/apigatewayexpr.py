from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApigatewayExpr:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expression' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
