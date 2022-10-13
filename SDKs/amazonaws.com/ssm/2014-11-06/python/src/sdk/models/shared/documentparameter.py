from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import documentparametertype_enum


@dataclass_json
@dataclass
class DocumentParameter:
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultValue' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    type: Optional[documentparametertype_enum.DocumentParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
