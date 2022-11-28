from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolTelnetGetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetGetConfigRequest:
    path_params: ProtocolTelnetGetConfigPathParams = field()
    

@dataclass
class ProtocolTelnetGetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    config_telnet: Optional[shared.ConfigTelnet] = field(default=None)
    
