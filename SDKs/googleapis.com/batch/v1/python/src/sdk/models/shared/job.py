from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobInput:
    r"""JobInput
    The Cloud Batch Job description.
    """
    
    allocation_policy: Optional[AllocationPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocationPolicy') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    logs_policy: Optional[LogsPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logsPolicy') }})
    notifications: Optional[List[JobNotification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    status: Optional[JobStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task_groups: Optional[List[TaskGroupInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskGroups') }})
    

@dataclass_json
@dataclass
class Job:
    r"""Job
    The Cloud Batch Job description.
    """
    
    allocation_policy: Optional[AllocationPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocationPolicy') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    logs_policy: Optional[LogsPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logsPolicy') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notifications: Optional[List[JobNotification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    status: Optional[JobStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task_groups: Optional[List[TaskGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskGroups') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
