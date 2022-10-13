from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ParameterConstraints:
    allowed_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedPattern' }})
    allowed_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedValues' }})
    constraint_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConstraintDescription' }})
    max_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxLength' }})
    max_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxValue' }})
    min_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinLength' }})
    min_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinValue' }})
    
