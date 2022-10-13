from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RelationalDatabaseParameter:
    allowed_values: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedValues' }})
    apply_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyMethod' }})
    apply_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyType' }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    is_modifiable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isModifiable' }})
    parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterName' }})
    parameter_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterValue' }})
    
