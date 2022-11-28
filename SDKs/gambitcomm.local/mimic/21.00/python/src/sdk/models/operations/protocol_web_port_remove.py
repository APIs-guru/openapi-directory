from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolWebPortRemovePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolWebPortRemoveRequest:
    path_params: ProtocolWebPortRemovePathParams = field()
    

@dataclass
class ProtocolWebPortRemoveResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_web_port_remove_200_application_json_string: Optional[str] = field(default=None)
    
