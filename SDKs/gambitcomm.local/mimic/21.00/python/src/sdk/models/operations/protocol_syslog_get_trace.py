from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSyslogGetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSyslogGetTraceRequest:
    path_params: ProtocolSyslogGetTracePathParams = field()
    

@dataclass
class ProtocolSyslogGetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    config_syslog: Optional[shared.ConfigSyslog] = field(default=None)
    
