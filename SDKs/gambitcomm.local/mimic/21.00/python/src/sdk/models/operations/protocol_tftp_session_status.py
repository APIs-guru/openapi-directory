from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolTftpSessionStatusPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpSessionStatusRequest:
    path_params: ProtocolTftpSessionStatusPathParams = field()
    

@dataclass
class ProtocolTftpSessionStatusResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_tftp_session_status_200_application_json_string: Optional[str] = field(default=None)
    
