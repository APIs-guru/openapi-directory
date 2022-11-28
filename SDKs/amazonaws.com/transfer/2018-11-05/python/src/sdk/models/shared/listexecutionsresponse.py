from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListExecutionsResponse:
    executions: List[ListedExecution] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Executions') }})
    workflow_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowId') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
