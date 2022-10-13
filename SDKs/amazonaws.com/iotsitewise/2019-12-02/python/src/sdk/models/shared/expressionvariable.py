from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import variablevalue


@dataclass_json
@dataclass
class ExpressionVariable:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: variablevalue.VariableValue = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
