from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTraceRequest:
    path_params: GetTracePathParams = field(default=None)
    

@dataclass
class GetTraceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_trace_200_application_json_int32_integer: Optional[int] = field(default=None)
    
