from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInfoPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    object: str = field(default=None, metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInfoRequest:
    path_params: GetInfoPathParams = field(default=None)
    

@dataclass
class GetInfoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_info_200_application_json_string: Optional[str] = field(default=None)
    
