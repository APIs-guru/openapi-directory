from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetStarttimePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    start: int = field(metadata={'path_param': { 'field_name': 'start', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetStarttimeRequest:
    path_params: SetStarttimePathParams = field()
    

@dataclass
class SetStarttimeResponse:
    content_type: str = field()
    status_code: int = field()
    set_starttime_200_application_json_string: Optional[str] = field(default=None)
    
