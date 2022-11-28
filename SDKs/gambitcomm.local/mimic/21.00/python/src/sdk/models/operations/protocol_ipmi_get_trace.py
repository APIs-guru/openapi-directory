from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolIpmiGetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolIpmiGetTraceRequest:
    path_params: ProtocolIpmiGetTracePathParams = field()
    

@dataclass
class ProtocolIpmiGetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    config_ipmi: Optional[shared.ConfigIpmi] = field(default=None)
    
