from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import queryparametervalue
from . import queryparametervalue


@dataclass_json
@dataclass
class QueryParameterValue:
    array_values: Optional[List[queryparametervalue.QueryParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayValues' }})
    struct_values: Optional[dict[str, queryparametervalue.QueryParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structValues' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
