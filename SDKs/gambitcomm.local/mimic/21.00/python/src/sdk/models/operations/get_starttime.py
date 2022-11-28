from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetStarttimePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStarttimeRequest:
    path_params: GetStarttimePathParams = field()
    

@dataclass
class GetStarttimeResponse:
    content_type: str = field()
    status_code: int = field()
    get_starttime_200_application_json_string: Optional[str] = field(default=None)
    
