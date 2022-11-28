from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSyslogGetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSyslogGetConfigRequest:
    path_params: ProtocolSyslogGetConfigPathParams = field()
    

@dataclass
class ProtocolSyslogGetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    config_syslog: Optional[shared.ConfigSyslog] = field(default=None)
    
