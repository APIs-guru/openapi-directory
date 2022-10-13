from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolTftpSessionStopPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpSessionStopRequest:
    path_params: ProtocolTftpSessionStopPathParams = field(default=None)
    

@dataclass
class ProtocolTftpSessionStopResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_tftp_session_stop_200_application_json_string: Optional[str] = field(default=None)
    
