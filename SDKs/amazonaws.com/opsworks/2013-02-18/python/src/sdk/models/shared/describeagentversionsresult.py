from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import agentversion


@dataclass_json
@dataclass
class DescribeAgentVersionsResult:
    agent_versions: Optional[List[agentversion.AgentVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentVersions' }})
    
