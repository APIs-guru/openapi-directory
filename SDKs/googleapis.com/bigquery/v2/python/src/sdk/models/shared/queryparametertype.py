from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QueryParameterTypeStructTypes:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[QueryParameterType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class QueryParameterType:
    array_type: Optional[QueryParameterType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayType') }})
    struct_types: Optional[List[QueryParameterTypeStructTypes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structTypes') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
