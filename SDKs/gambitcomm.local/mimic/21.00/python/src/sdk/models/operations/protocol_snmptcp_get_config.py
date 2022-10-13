from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSnmptcpGetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmptcpGetConfigRequest:
    path_params: ProtocolSnmptcpGetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolSnmptcpGetConfigResponse:
    config_snmptcp: Optional[shared.ConfigSnmptcp] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
