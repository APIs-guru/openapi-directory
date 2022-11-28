from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolWebPortSetPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    protocol: str = field(metadata={'path_param': { 'field_name': 'protocol', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolWebPortSetRequest:
    path_params: ProtocolWebPortSetPathParams = field()
    

@dataclass
class ProtocolWebPortSetResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_web_port_set_200_application_json_string: Optional[str] = field(default=None)
    
