from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSflowSetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    enable_or_not: str = field(metadata={'path_param': { 'field_name': 'enableOrNot', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSflowSetTraceRequest:
    path_params: ProtocolSflowSetTracePathParams = field()
    

@dataclass
class ProtocolSflowSetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_sflow_set_trace_200_application_json_string: Optional[str] = field(default=None)
    
