from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TaskScheduledEventDetails:
    r"""TaskScheduledEventDetails
    Contains details about a task scheduled during an execution.
    """
    
    parameters: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    resource: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    resource_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    heartbeat_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heartbeatInSeconds') }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInSeconds') }})
    
