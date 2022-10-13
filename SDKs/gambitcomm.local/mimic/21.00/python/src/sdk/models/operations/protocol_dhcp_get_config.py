from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolDhcpGetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolDhcpGetConfigRequest:
    path_params: ProtocolDhcpGetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolDhcpGetConfigResponse:
    config_dhcp: Optional[shared.ConfigDhcp] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
