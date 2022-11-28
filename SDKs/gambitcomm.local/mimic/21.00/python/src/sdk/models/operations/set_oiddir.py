from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetOiddirPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    oiddir: str = field(metadata={'path_param': { 'field_name': 'oiddir', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetOiddirRequest:
    path_params: SetOiddirPathParams = field()
    

@dataclass
class SetOiddirResponse:
    content_type: str = field()
    status_code: int = field()
    set_oiddir_200_application_json_string: Optional[str] = field(default=None)
    
