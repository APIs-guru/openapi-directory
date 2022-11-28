from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeMaintenanceWindowsForTargetRequest:
    resource_type: MaintenanceWindowResourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    targets: List[Target] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
