from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AgentVersion:
    r"""AgentVersion
    Edge Manager agent version.
    """
    
    agent_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentCount') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
