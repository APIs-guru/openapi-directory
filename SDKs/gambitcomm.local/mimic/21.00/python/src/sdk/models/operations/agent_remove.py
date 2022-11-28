from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AgentRemovePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentRemoveRequest:
    path_params: AgentRemovePathParams = field()
    

@dataclass
class AgentRemoveResponse:
    content_type: str = field()
    status_code: int = field()
    agent_remove_200_application_json_string: Optional[str] = field(default=None)
    
