from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskGroupInput:
    r"""TaskGroupInput
    A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
    """
    
    parallelism: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallelism') }})
    permissive_ssh: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissiveSsh') }})
    require_hosts_file: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireHostsFile') }})
    task_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskCount') }})
    task_count_per_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskCountPerNode') }})
    task_environments: Optional[List[Environment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskEnvironments') }})
    task_spec: Optional[TaskSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSpec') }})
    

@dataclass_json
@dataclass
class TaskGroup:
    r"""TaskGroup
    A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parallelism: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallelism') }})
    permissive_ssh: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissiveSsh') }})
    require_hosts_file: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireHostsFile') }})
    task_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskCount') }})
    task_count_per_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskCountPerNode') }})
    task_environments: Optional[List[Environment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskEnvironments') }})
    task_spec: Optional[TaskSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSpec') }})
    
