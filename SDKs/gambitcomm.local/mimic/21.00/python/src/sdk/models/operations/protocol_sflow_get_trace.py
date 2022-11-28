from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSflowGetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSflowGetTraceRequest:
    path_params: ProtocolSflowGetTracePathParams = field()
    

@dataclass
class ProtocolSflowGetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    config_sflow: Optional[shared.ConfigSflow] = field(default=None)
    
