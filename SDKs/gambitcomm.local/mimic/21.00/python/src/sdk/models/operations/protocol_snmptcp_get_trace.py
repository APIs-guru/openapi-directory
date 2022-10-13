from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSnmptcpGetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmptcpGetTraceRequest:
    path_params: ProtocolSnmptcpGetTracePathParams = field(default=None)
    

@dataclass
class ProtocolSnmptcpGetTraceResponse:
    config_snmptcp: Optional[shared.ConfigSnmptcp] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
