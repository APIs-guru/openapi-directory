from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolIpmiGetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolIpmiGetTraceRequest:
    path_params: ProtocolIpmiGetTracePathParams = field(default=None)
    

@dataclass
class ProtocolIpmiGetTraceResponse:
    config_ipmi: Optional[shared.ConfigIpmi] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
