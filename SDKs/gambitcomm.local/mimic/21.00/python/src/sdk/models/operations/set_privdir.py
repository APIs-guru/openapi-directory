from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetPrivdirPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    privdir: str = field(metadata={'path_param': { 'field_name': 'privdir', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetPrivdirRequest:
    path_params: SetPrivdirPathParams = field()
    

@dataclass
class SetPrivdirResponse:
    content_type: str = field()
    status_code: int = field()
    set_privdir_200_application_json_string: Optional[str] = field(default=None)
    
