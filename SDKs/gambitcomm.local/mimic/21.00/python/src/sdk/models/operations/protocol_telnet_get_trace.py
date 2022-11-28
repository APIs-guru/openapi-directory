from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolTelnetGetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetGetTraceRequest:
    path_params: ProtocolTelnetGetTracePathParams = field()
    

@dataclass
class ProtocolTelnetGetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    config_telnet: Optional[shared.ConfigTelnet] = field(default=None)
    
