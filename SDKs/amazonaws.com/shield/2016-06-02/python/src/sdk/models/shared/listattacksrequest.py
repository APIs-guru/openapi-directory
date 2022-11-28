from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAttacksRequest:
    end_time: Optional[TimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArns') }})
    start_time: Optional[TimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime') }})
    
