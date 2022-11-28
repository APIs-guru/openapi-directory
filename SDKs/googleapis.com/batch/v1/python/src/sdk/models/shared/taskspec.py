from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskSpec:
    r"""TaskSpec
    Spec of a task
    """
    
    compute_resource: Optional[ComputeResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeResource') }})
    environment: Optional[Environment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    environments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    lifecycle_policies: Optional[List[LifecyclePolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecyclePolicies') }})
    max_retry_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetryCount') }})
    max_run_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRunDuration') }})
    runnables: Optional[List[Runnable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runnables') }})
    volumes: Optional[List[Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
