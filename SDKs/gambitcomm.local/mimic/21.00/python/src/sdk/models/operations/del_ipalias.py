from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DelIpaliasPathParams:
    ip: str = field(metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelIpaliasRequest:
    path_params: DelIpaliasPathParams = field()
    

@dataclass
class DelIpaliasResponse:
    content_type: str = field()
    status_code: int = field()
    del_ipalias_200_application_json_string: Optional[str] = field(default=None)
    
