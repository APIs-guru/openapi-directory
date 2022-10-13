from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSyslogGetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSyslogGetConfigRequest:
    path_params: ProtocolSyslogGetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolSyslogGetConfigResponse:
    config_syslog: Optional[shared.ConfigSyslog] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
