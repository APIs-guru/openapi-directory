from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetSimPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSimRequest:
    path_params: GetSimPathParams = field()
    

@dataclass
class GetSimResponse:
    content_type: str = field()
    status_code: int = field()
    get_sim_200_application_json_string: Optional[str] = field(default=None)
    
