from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolDhcpGetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolDhcpGetTraceRequest:
    path_params: ProtocolDhcpGetTracePathParams = field()
    

@dataclass
class ProtocolDhcpGetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    config_dhcp: Optional[shared.ConfigDhcp] = field(default=None)
    
