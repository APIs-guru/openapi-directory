from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolWebPortRemovePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolWebPortRemoveRequest:
    path_params: ProtocolWebPortRemovePathParams = field(default=None)
    

@dataclass
class ProtocolWebPortRemoveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_web_port_remove_200_application_json_string: Optional[str] = field(default=None)
    
