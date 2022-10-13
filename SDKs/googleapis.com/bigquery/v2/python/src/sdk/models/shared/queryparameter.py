from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import queryparametertype
from . import queryparametervalue


@dataclass_json
@dataclass
class QueryParameter:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameter_type: Optional[queryparametertype.QueryParameterType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterType' }})
    parameter_value: Optional[queryparametervalue.QueryParameterValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterValue' }})
    
