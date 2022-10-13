from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolProxyGetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolProxyGetTraceRequest:
    path_params: ProtocolProxyGetTracePathParams = field(default=None)
    

@dataclass
class ProtocolProxyGetTraceResponse:
    config_proxy: Optional[shared.ConfigProxy] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
