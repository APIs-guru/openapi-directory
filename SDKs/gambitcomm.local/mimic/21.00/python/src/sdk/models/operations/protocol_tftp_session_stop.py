from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolTftpSessionStopPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpSessionStopRequest:
    path_params: ProtocolTftpSessionStopPathParams = field()
    

@dataclass
class ProtocolTftpSessionStopResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_tftp_session_stop_200_application_json_string: Optional[str] = field(default=None)
    
