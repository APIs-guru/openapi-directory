from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetOiddirPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOiddirRequest:
    path_params: GetOiddirPathParams = field()
    

@dataclass
class GetOiddirResponse:
    content_type: str = field()
    status_code: int = field()
    get_oiddir_200_application_json_string: Optional[str] = field(default=None)
    
