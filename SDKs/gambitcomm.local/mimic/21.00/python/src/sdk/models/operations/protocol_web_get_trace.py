from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolWebGetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolWebGetTraceRequest:
    path_params: ProtocolWebGetTracePathParams = field(default=None)
    

@dataclass
class ProtocolWebGetTraceResponse:
    config_web: Optional[shared.ConfigWeb] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
