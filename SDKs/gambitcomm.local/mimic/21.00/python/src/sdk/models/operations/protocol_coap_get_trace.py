from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolCoapGetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolCoapGetTraceRequest:
    path_params: ProtocolCoapGetTracePathParams = field(default=None)
    

@dataclass
class ProtocolCoapGetTraceResponse:
    config_coap: Optional[shared.ConfigCoap] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
