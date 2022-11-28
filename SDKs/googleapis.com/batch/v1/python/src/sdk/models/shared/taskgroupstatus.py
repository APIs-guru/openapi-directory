from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskGroupStatus:
    r"""TaskGroupStatus
    Aggregated task status for a TaskGroup.
    """
    
    counts: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counts') }})
    instances: Optional[List[InstanceStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    
