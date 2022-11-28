from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class AgentStoreListPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentStoreListRequest:
    path_params: AgentStoreListPathParams = field()
    

@dataclass
class AgentStoreListResponse:
    content_type: str = field()
    status_code: int = field()
    agent_store_list_200_application_json_strings: Optional[List[str]] = field(default=None)
    
