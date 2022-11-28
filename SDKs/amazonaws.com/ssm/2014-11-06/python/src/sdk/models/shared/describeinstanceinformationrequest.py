from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeInstanceInformationRequest:
    filters: Optional[List[InstanceInformationStringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    instance_information_filter_list: Optional[List[InstanceInformationFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceInformationFilterList') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
