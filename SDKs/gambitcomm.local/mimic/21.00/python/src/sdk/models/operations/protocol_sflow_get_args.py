from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProtocolSflowGetArgsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSflowGetArgsRequest:
    path_params: ProtocolSflowGetArgsPathParams = field()
    

@dataclass
class ProtocolSflowGetArgsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_sflow_get_args_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
