from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetOidPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    object: str = field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOidRequest:
    path_params: GetOidPathParams = field()
    

@dataclass
class GetOidResponse:
    content_type: str = field()
    status_code: int = field()
    get_oid_200_application_json_string: Optional[str] = field(default=None)
    
