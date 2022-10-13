from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSflowGetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSflowGetConfigRequest:
    path_params: ProtocolSflowGetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolSflowGetConfigResponse:
    config_sflow: Optional[shared.ConfigSflow] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
