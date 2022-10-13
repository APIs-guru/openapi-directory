from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class TrapListPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class TrapListRequest:
    path_params: TrapListPathParams = field(default=None)
    

@dataclass
class TrapListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trap_list_200_application_json_strings: Optional[List[str]] = field(default=None)
    
