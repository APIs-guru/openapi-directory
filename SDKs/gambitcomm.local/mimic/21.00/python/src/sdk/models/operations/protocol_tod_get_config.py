from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolTodGetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTodGetConfigRequest:
    path_params: ProtocolTodGetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolTodGetConfigResponse:
    config_tod: Optional[shared.ConfigTod] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
