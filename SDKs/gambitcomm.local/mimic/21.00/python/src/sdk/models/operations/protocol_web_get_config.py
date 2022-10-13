from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolWebGetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolWebGetConfigRequest:
    path_params: ProtocolWebGetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolWebGetConfigResponse:
    config_web: Optional[shared.ConfigWeb] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
