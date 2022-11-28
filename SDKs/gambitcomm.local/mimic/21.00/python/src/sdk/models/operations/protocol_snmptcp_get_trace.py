from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSnmptcpGetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmptcpGetTraceRequest:
    path_params: ProtocolSnmptcpGetTracePathParams = field()
    

@dataclass
class ProtocolSnmptcpGetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    config_snmptcp: Optional[shared.ConfigSnmptcp] = field(default=None)
    
