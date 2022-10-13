from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSflowGetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSflowGetTraceRequest:
    path_params: ProtocolSflowGetTracePathParams = field(default=None)
    

@dataclass
class ProtocolSflowGetTraceResponse:
    config_sflow: Optional[shared.ConfigSflow] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
