from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetStarttimePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    start: int = field(default=None, metadata={'path_param': { 'field_name': 'start', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetStarttimeRequest:
    path_params: SetStarttimePathParams = field(default=None)
    

@dataclass
class SetStarttimeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_starttime_200_application_json_string: Optional[str] = field(default=None)
    
