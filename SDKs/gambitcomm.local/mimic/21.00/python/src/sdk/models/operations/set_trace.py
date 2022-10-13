from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    trace: int = field(default=None, metadata={'path_param': { 'field_name': 'trace', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetTraceRequest:
    path_params: SetTracePathParams = field(default=None)
    

@dataclass
class SetTraceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_trace_200_application_json_int32_integer: Optional[int] = field(default=None)
    
