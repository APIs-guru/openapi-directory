from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AgentStoreSetPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    persist: int = field(default=None, metadata={'path_param': { 'field_name': 'persist', 'style': 'simple', 'explode': False }})
    var: str = field(default=None, metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentStoreSetRequest:
    path_params: AgentStoreSetPathParams = field(default=None)
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AgentStoreSetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    agent_store_set_200_application_json_string: Optional[str] = field(default=None)
    
