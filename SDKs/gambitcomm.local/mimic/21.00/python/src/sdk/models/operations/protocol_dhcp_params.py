from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ProtocolDhcpParamsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolDhcpParamsRequest:
    path_params: ProtocolDhcpParamsPathParams = field(default=None)
    

@dataclass
class ProtocolDhcpParamsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_dhcp_params_200_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    
