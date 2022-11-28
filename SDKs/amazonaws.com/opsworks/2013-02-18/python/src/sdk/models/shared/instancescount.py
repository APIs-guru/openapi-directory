from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InstancesCount:
    r"""InstancesCount
    Describes how many instances a stack has for each status.
    """
    
    assigning: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Assigning') }})
    booting: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Booting') }})
    connection_lost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionLost') }})
    deregistering: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deregistering') }})
    online: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Online') }})
    pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pending') }})
    rebooting: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rebooting') }})
    registered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Registered') }})
    registering: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Registering') }})
    requested: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Requested') }})
    running_setup: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunningSetup') }})
    setup_failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SetupFailed') }})
    shutting_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShuttingDown') }})
    start_failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartFailed') }})
    stop_failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopFailed') }})
    stopped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stopped') }})
    stopping: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stopping') }})
    terminated: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Terminated') }})
    terminating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Terminating') }})
    unassigning: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unassigning') }})
    
