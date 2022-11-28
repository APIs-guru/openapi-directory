from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DelTimerScriptPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    arg: str = field(metadata={'path_param': { 'field_name': 'arg', 'style': 'simple', 'explode': False }})
    interval: int = field(metadata={'path_param': { 'field_name': 'interval', 'style': 'simple', 'explode': False }})
    script: str = field(metadata={'path_param': { 'field_name': 'script', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelTimerScriptRequest:
    path_params: DelTimerScriptPathParams = field()
    

@dataclass
class DelTimerScriptResponse:
    content_type: str = field()
    status_code: int = field()
    del_timer_script_200_application_json_string: Optional[str] = field(default=None)
    
