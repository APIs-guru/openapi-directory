from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProtocolNetflowGetArgsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowGetArgsRequest:
    path_params: ProtocolNetflowGetArgsPathParams = field(default=None)
    

@dataclass
class ProtocolNetflowGetArgsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_netflow_get_args_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
