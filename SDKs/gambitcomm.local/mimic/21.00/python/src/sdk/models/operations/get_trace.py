from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTraceRequest:
    path_params: GetTracePathParams = field()
    

@dataclass
class GetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    get_trace_200_application_json_int32_integer: Optional[int] = field(default=None)
    
