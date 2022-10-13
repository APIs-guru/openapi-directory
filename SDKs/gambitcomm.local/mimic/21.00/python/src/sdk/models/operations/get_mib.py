from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMibPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    object: str = field(default=None, metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMibRequest:
    path_params: GetMibPathParams = field(default=None)
    

@dataclass
class GetMibResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_mib_200_application_json_string: Optional[str] = field(default=None)
    
