from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProtocolSnmptcpGetArgsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmptcpGetArgsRequest:
    path_params: ProtocolSnmptcpGetArgsPathParams = field()
    

@dataclass
class ProtocolSnmptcpGetArgsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmptcp_get_args_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
