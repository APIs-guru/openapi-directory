from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DelTimerScriptPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    arg: str = field(default=None, metadata={'path_param': { 'field_name': 'arg', 'style': 'simple', 'explode': False }})
    interval: int = field(default=None, metadata={'path_param': { 'field_name': 'interval', 'style': 'simple', 'explode': False }})
    script: str = field(default=None, metadata={'path_param': { 'field_name': 'script', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelTimerScriptRequest:
    path_params: DelTimerScriptPathParams = field(default=None)
    

@dataclass
class DelTimerScriptResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    del_timer_script_200_application_json_string: Optional[str] = field(default=None)
    
