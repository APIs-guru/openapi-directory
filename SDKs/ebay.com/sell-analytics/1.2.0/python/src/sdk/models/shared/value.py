from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Value:
    applicable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicable' }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
