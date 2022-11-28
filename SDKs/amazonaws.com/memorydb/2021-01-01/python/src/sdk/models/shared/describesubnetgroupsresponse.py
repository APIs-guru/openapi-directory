from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeSubnetGroupsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    subnet_groups: Optional[List[SubnetGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetGroups') }})
    
