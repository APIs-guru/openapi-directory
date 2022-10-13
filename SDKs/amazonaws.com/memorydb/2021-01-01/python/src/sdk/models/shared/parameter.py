from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Parameter:
    allowed_values: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedValues' }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    minimum_engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumEngineVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
