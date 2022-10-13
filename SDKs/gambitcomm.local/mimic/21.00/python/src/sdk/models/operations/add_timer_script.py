from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AddTimerScriptPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    arg: str = field(default=None, metadata={'path_param': { 'field_name': 'arg', 'style': 'simple', 'explode': False }})
    interval: int = field(default=None, metadata={'path_param': { 'field_name': 'interval', 'style': 'simple', 'explode': False }})
    script: str = field(default=None, metadata={'path_param': { 'field_name': 'script', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddTimerScriptRequest:
    path_params: AddTimerScriptPathParams = field(default=None)
    

@dataclass
class AddTimerScriptResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    add_timer_script_200_application_json_string: Optional[str] = field(default=None)
    
