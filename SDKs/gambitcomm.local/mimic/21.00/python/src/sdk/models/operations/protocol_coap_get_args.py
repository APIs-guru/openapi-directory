from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProtocolCoapGetArgsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolCoapGetArgsRequest:
    path_params: ProtocolCoapGetArgsPathParams = field(default=None)
    

@dataclass
class ProtocolCoapGetArgsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_coap_get_args_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
