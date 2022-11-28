from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportAgentStateRequest:
    r"""ReportAgentStateRequest
    Request to report agent's state. The Request itself implies the agent is healthy.
    """
    
    agent_info: Optional[AgentInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentInfo') }})
    metadata: Optional[AgentMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
