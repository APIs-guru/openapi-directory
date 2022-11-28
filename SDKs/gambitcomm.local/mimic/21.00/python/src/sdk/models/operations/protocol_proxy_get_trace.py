from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolProxyGetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolProxyGetTraceRequest:
    path_params: ProtocolProxyGetTracePathParams = field()
    

@dataclass
class ProtocolProxyGetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    config_proxy: Optional[shared.ConfigProxy] = field(default=None)
    
