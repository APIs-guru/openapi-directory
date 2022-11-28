from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AddDaemonTimerScriptPathParams:
    arg: str = field(metadata={'path_param': { 'field_name': 'arg', 'style': 'simple', 'explode': False }})
    interval: int = field(metadata={'path_param': { 'field_name': 'interval', 'style': 'simple', 'explode': False }})
    script: str = field(metadata={'path_param': { 'field_name': 'script', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddDaemonTimerScriptRequest:
    path_params: AddDaemonTimerScriptPathParams = field()
    

@dataclass
class AddDaemonTimerScriptResponse:
    content_type: str = field()
    status_code: int = field()
    add_daemon_timer_script_200_application_json_string: Optional[str] = field(default=None)
    
