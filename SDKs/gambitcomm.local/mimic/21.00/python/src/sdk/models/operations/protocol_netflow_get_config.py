from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolNetflowGetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowGetConfigRequest:
    path_params: ProtocolNetflowGetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolNetflowGetConfigResponse:
    config_netflow: Optional[shared.ConfigNetflow] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
