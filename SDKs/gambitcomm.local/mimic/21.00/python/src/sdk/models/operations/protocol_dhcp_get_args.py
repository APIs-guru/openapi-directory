from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProtocolDhcpGetArgsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolDhcpGetArgsRequest:
    path_params: ProtocolDhcpGetArgsPathParams = field()
    

@dataclass
class ProtocolDhcpGetArgsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_dhcp_get_args_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
