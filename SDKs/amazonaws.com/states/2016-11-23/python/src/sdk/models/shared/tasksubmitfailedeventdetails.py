from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TaskSubmitFailedEventDetails:
    r"""TaskSubmitFailedEventDetails
    Contains details about a task that failed to submit during an execution.
    """
    
    resource: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    resource_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    cause: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
