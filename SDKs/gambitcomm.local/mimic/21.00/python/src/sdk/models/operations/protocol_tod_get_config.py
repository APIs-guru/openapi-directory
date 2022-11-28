from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolTodGetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTodGetConfigRequest:
    path_params: ProtocolTodGetConfigPathParams = field()
    

@dataclass
class ProtocolTodGetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    config_tod: Optional[shared.ConfigTod] = field(default=None)
    
