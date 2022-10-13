from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetPrivdirPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    privdir: str = field(default=None, metadata={'path_param': { 'field_name': 'privdir', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetPrivdirRequest:
    path_params: SetPrivdirPathParams = field(default=None)
    

@dataclass
class SetPrivdirResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_privdir_200_application_json_string: Optional[str] = field(default=None)
    
