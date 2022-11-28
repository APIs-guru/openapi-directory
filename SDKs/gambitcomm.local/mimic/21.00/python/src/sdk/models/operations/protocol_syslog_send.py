from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSyslogSendPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    pri: int = field(metadata={'path_param': { 'field_name': 'pri', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSyslogSendRequest:
    path_params: ProtocolSyslogSendPathParams = field()
    request: shared.SyslogMsg = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProtocolSyslogSendResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_syslog_send_200_application_json_string: Optional[str] = field(default=None)
    
