from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportAgentStateResponse:
    r"""ReportAgentStateResponse
    Response to ReportAgentStateRequest.
    """
    
    tasks: Optional[List[AgentTask]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    
