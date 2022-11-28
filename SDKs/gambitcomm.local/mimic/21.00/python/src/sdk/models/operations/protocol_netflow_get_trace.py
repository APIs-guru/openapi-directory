from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolNetflowGetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowGetTraceRequest:
    path_params: ProtocolNetflowGetTracePathParams = field()
    

@dataclass
class ProtocolNetflowGetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    config_netflow: Optional[shared.ConfigNetflow] = field(default=None)
    
