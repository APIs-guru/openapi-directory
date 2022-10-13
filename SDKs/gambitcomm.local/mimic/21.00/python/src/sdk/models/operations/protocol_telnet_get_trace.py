from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolTelnetGetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetGetTraceRequest:
    path_params: ProtocolTelnetGetTracePathParams = field(default=None)
    

@dataclass
class ProtocolTelnetGetTraceResponse:
    config_telnet: Optional[shared.ConfigTelnet] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
