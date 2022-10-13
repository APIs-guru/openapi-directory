from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSyslogGetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSyslogGetTraceRequest:
    path_params: ProtocolSyslogGetTracePathParams = field(default=None)
    

@dataclass
class ProtocolSyslogGetTraceResponse:
    config_syslog: Optional[shared.ConfigSyslog] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
