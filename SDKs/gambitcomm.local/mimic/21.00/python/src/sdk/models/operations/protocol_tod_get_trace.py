from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolTodGetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTodGetTraceRequest:
    path_params: ProtocolTodGetTracePathParams = field()
    

@dataclass
class ProtocolTodGetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    config_tod: Optional[shared.ConfigTod] = field(default=None)
    
