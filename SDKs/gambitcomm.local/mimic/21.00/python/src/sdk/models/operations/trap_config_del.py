from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TrapConfigDelPathParams:
    ip: str = field(metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class TrapConfigDelRequest:
    path_params: TrapConfigDelPathParams = field()
    

@dataclass
class TrapConfigDelResponse:
    content_type: str = field()
    status_code: int = field()
    trap_config_del_200_application_json_string: Optional[str] = field(default=None)
    
