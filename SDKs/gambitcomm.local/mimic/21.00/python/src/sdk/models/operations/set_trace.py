from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    trace: int = field(metadata={'path_param': { 'field_name': 'trace', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetTraceRequest:
    path_params: SetTracePathParams = field()
    

@dataclass
class SetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    set_trace_200_application_json_int32_integer: Optional[int] = field(default=None)
    
