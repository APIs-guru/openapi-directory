from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FromAddPathParams:
    ip: str = field(metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class FromAddRequest:
    path_params: FromAddPathParams = field()
    

@dataclass
class FromAddResponse:
    content_type: str = field()
    status_code: int = field()
    from_add_200_application_json_string: Optional[str] = field(default=None)
    
