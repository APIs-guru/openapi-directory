from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolTodSetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    enable_or_not: str = field(default=None, metadata={'path_param': { 'field_name': 'enableOrNot', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTodSetTraceRequest:
    path_params: ProtocolTodSetTracePathParams = field(default=None)
    

@dataclass
class ProtocolTodSetTraceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_tod_set_trace_200_application_json_string: Optional[str] = field(default=None)
    
