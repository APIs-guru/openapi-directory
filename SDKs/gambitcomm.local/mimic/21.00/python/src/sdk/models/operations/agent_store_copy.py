from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AgentStoreCopyPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    other_agent: int = field(metadata={'path_param': { 'field_name': 'otherAgent', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentStoreCopyRequest:
    path_params: AgentStoreCopyPathParams = field()
    

@dataclass
class AgentStoreCopyResponse:
    content_type: str = field()
    status_code: int = field()
    agent_store_copy_200_application_json_string: Optional[str] = field(default=None)
    
