from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolProxyGetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolProxyGetConfigRequest:
    path_params: ProtocolProxyGetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolProxyGetConfigResponse:
    config_proxy: Optional[shared.ConfigProxy] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
