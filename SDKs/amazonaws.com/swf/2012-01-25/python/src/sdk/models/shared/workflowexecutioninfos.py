from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowExecutionInfos:
    r"""WorkflowExecutionInfos
    Contains a paginated list of information about workflow executions.
    """
    
    execution_infos: List[WorkflowExecutionInfo] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionInfos') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
