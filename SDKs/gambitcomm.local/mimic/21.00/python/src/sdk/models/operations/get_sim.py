from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetSimPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSimRequest:
    path_params: GetSimPathParams = field(default=None)
    

@dataclass
class GetSimResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_sim_200_application_json_string: Optional[str] = field(default=None)
    
