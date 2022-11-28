from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSnmpv3GetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3GetConfigRequest:
    path_params: ProtocolSnmpv3GetConfigPathParams = field()
    

@dataclass
class ProtocolSnmpv3GetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    config_snm_pv3: Optional[shared.ConfigSnmPv3] = field(default=None)
    
