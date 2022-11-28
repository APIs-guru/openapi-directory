from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolWebSetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    enable_or_not: str = field(metadata={'path_param': { 'field_name': 'enableOrNot', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolWebSetTraceRequest:
    path_params: ProtocolWebSetTracePathParams = field()
    

@dataclass
class ProtocolWebSetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_web_set_trace_200_application_json_string: Optional[str] = field(default=None)
    
