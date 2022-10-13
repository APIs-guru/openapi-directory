from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Value:
    interpreted_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interpretedValue' }})
    original_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalValue' }})
    resolved_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedValues' }})
    
