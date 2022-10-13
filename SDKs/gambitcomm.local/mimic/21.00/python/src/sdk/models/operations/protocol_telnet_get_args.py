from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProtocolTelnetGetArgsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetGetArgsRequest:
    path_params: ProtocolTelnetGetArgsPathParams = field(default=None)
    

@dataclass
class ProtocolTelnetGetArgsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_telnet_get_args_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
