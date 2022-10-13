from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProtocolTodGetArgsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTodGetArgsRequest:
    path_params: ProtocolTodGetArgsPathParams = field(default=None)
    

@dataclass
class ProtocolTodGetArgsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_tod_get_args_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
