from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AgentStoreCopyPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    other_agent: int = field(default=None, metadata={'path_param': { 'field_name': 'otherAgent', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentStoreCopyRequest:
    path_params: AgentStoreCopyPathParams = field(default=None)
    

@dataclass
class AgentStoreCopyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    agent_store_copy_200_application_json_string: Optional[str] = field(default=None)
    
