from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProtocolCoapGetArgsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolCoapGetArgsRequest:
    path_params: ProtocolCoapGetArgsPathParams = field()
    

@dataclass
class ProtocolCoapGetArgsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_coap_get_args_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
