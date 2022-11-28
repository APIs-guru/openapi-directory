from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetParametersByPathRequest:
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    parameter_filters: Optional[List[ParameterStringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterFilters') }})
    recursive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Recursive') }})
    with_decryption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WithDecryption') }})
    
