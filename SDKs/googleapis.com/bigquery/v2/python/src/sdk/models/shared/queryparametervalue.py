from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QueryParameterValue:
    array_values: Optional[List[QueryParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayValues') }})
    struct_values: Optional[dict[str, QueryParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structValues') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
