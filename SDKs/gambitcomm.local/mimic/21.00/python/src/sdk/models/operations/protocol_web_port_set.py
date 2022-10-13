from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolWebPortSetPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    protocol: str = field(default=None, metadata={'path_param': { 'field_name': 'protocol', 'style': 'simple', 'explode': False }})
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolWebPortSetRequest:
    path_params: ProtocolWebPortSetPathParams = field(default=None)
    

@dataclass
class ProtocolWebPortSetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_web_port_set_200_application_json_string: Optional[str] = field(default=None)
    
