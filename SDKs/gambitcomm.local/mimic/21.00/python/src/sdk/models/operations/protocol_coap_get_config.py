from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolCoapGetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolCoapGetConfigRequest:
    path_params: ProtocolCoapGetConfigPathParams = field()
    

@dataclass
class ProtocolCoapGetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    config_coap: Optional[shared.ConfigCoap] = field(default=None)
    
