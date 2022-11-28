from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkloadShareSummary:
    r"""WorkloadShareSummary
    A workload share summary return object.
    """
    
    permission_type: Optional[PermissionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionType') }})
    share_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareId') }})
    shared_with: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedWith') }})
    status: Optional[ShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
