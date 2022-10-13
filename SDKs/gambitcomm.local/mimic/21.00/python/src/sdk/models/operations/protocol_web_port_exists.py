from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolWebPortExistsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolWebPortExistsRequest:
    path_params: ProtocolWebPortExistsPathParams = field(default=None)
    

@dataclass
class ProtocolWebPortExistsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_web_port_exists_200_application_json_strings: Optional[List[str]] = field(default=None)
    
