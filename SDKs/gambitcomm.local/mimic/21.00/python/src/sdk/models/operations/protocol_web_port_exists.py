from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolWebPortExistsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolWebPortExistsRequest:
    path_params: ProtocolWebPortExistsPathParams = field()
    

@dataclass
class ProtocolWebPortExistsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_web_port_exists_200_application_json_strings: Optional[List[str]] = field(default=None)
    
