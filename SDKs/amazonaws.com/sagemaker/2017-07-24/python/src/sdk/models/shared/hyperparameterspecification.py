from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import parameterrange
from . import parametertype_enum


@dataclass_json
@dataclass
class HyperParameterSpecification:
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultValue' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    is_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsRequired' }})
    is_tunable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsTunable' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    range: Optional[parameterrange.ParameterRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Range' }})
    type: parametertype_enum.ParameterTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
