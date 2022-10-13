from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolIpmiGetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolIpmiGetConfigRequest:
    path_params: ProtocolIpmiGetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolIpmiGetConfigResponse:
    config_ipmi: Optional[shared.ConfigIpmi] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
