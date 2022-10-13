from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolTodGetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTodGetTraceRequest:
    path_params: ProtocolTodGetTracePathParams = field(default=None)
    

@dataclass
class ProtocolTodGetTraceResponse:
    config_tod: Optional[shared.ConfigTod] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
