from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AgentStoreUnsetPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    var: str = field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentStoreUnsetRequest:
    path_params: AgentStoreUnsetPathParams = field()
    

@dataclass
class AgentStoreUnsetResponse:
    content_type: str = field()
    status_code: int = field()
    agent_store_unset_200_application_json_string: Optional[str] = field(default=None)
    
