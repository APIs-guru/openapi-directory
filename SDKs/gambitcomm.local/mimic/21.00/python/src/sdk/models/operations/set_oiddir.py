from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetOiddirPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    oiddir: str = field(default=None, metadata={'path_param': { 'field_name': 'oiddir', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetOiddirRequest:
    path_params: SetOiddirPathParams = field(default=None)
    

@dataclass
class SetOiddirResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_oiddir_200_application_json_string: Optional[str] = field(default=None)
    
