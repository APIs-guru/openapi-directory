from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ProtocolDhcpParamsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolDhcpParamsRequest:
    path_params: ProtocolDhcpParamsPathParams = field()
    

@dataclass
class ProtocolDhcpParamsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_dhcp_params_200_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    
