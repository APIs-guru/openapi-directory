from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FilterExpression:
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseSensitive' }})
    expression_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expressionValue' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    field_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldIndex' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    match_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchType' }})
    
