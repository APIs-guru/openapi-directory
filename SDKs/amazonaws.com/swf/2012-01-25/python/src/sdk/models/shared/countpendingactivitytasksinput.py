from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CountPendingActivityTasksInput:
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    task_list: TaskList = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskList') }})
    
