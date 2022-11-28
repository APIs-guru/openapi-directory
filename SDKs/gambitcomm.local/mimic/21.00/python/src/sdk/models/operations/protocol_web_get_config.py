from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolWebGetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolWebGetConfigRequest:
    path_params: ProtocolWebGetConfigPathParams = field()
    

@dataclass
class ProtocolWebGetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    config_web: Optional[shared.ConfigWeb] = field(default=None)
    
