from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSyslogSendPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    pri: int = field(default=None, metadata={'path_param': { 'field_name': 'pri', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSyslogSendRequest:
    path_params: ProtocolSyslogSendPathParams = field(default=None)
    request: shared.SyslogMsg = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProtocolSyslogSendResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_syslog_send_200_application_json_string: Optional[str] = field(default=None)
    
