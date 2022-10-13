from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FromAddPathParams:
    ip: str = field(default=None, metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class FromAddRequest:
    path_params: FromAddPathParams = field(default=None)
    

@dataclass
class FromAddResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    from_add_200_application_json_string: Optional[str] = field(default=None)
    
