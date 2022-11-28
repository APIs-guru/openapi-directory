from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolProxyGetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolProxyGetConfigRequest:
    path_params: ProtocolProxyGetConfigPathParams = field()
    

@dataclass
class ProtocolProxyGetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    config_proxy: Optional[shared.ConfigProxy] = field(default=None)
    
