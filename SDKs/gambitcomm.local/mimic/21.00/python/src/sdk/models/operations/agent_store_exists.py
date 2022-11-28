from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AgentStoreExistsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    var: str = field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentStoreExistsRequest:
    path_params: AgentStoreExistsPathParams = field()
    

@dataclass
class AgentStoreExistsResponse:
    content_type: str = field()
    status_code: int = field()
    agent_store_exists_200_application_json_string: Optional[str] = field(default=None)
    
