from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AgentVersion:
    agent_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentCount' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
