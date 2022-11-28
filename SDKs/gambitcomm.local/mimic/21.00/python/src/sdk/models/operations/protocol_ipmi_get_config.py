from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolIpmiGetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolIpmiGetConfigRequest:
    path_params: ProtocolIpmiGetConfigPathParams = field()
    

@dataclass
class ProtocolIpmiGetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    config_ipmi: Optional[shared.ConfigIpmi] = field(default=None)
    
