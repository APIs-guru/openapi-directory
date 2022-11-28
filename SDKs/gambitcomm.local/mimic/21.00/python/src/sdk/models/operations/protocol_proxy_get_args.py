from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProtocolProxyGetArgsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolProxyGetArgsRequest:
    path_params: ProtocolProxyGetArgsPathParams = field()
    

@dataclass
class ProtocolProxyGetArgsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_proxy_get_args_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
