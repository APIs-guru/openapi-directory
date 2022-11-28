from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSflowGetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSflowGetConfigRequest:
    path_params: ProtocolSflowGetConfigPathParams = field()
    

@dataclass
class ProtocolSflowGetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    config_sflow: Optional[shared.ConfigSflow] = field(default=None)
    
