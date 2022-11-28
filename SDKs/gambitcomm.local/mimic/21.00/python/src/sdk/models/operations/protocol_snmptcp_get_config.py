from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSnmptcpGetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmptcpGetConfigRequest:
    path_params: ProtocolSnmptcpGetConfigPathParams = field()
    

@dataclass
class ProtocolSnmptcpGetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    config_snmptcp: Optional[shared.ConfigSnmptcp] = field(default=None)
    
