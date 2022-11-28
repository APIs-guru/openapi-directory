from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolWebGetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolWebGetTraceRequest:
    path_params: ProtocolWebGetTracePathParams = field()
    

@dataclass
class ProtocolWebGetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    config_web: Optional[shared.ConfigWeb] = field(default=None)
    
