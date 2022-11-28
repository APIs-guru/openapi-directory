from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AgentState:
    agent_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentNum') }})
    state: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
