from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import queryparametertype
from . import queryparametertype


@dataclass_json
@dataclass
class QueryParameterTypeStructTypes:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[queryparametertype.QueryParameterType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class QueryParameterType:
    array_type: Optional[queryparametertype.QueryParameterType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayType' }})
    struct_types: Optional[List[QueryParameterTypeStructTypes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structTypes' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
