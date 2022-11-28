from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TaskExecution:
    r"""TaskExecution
    This Task Execution field includes detail information for task execution procedures, based on StatusEvent types.
    """
    
    exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    
