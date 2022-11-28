from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolDhcpGetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolDhcpGetConfigRequest:
    path_params: ProtocolDhcpGetConfigPathParams = field()
    

@dataclass
class ProtocolDhcpGetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    config_dhcp: Optional[shared.ConfigDhcp] = field(default=None)
    
