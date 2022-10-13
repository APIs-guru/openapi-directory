from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSnmpv3GetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3GetConfigRequest:
    path_params: ProtocolSnmpv3GetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3GetConfigResponse:
    config_snm_pv3: Optional[shared.ConfigSnmPv3] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
