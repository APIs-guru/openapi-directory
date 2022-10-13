from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolTelnetSetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    enable_or_not: str = field(default=None, metadata={'path_param': { 'field_name': 'enableOrNot', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetSetTraceRequest:
    path_params: ProtocolTelnetSetTracePathParams = field(default=None)
    

@dataclass
class ProtocolTelnetSetTraceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_telnet_set_trace_200_application_json_string: Optional[str] = field(default=None)
    
