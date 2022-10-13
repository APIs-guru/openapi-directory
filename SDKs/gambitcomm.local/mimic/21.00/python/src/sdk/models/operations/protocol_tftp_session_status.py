from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolTftpSessionStatusPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpSessionStatusRequest:
    path_params: ProtocolTftpSessionStatusPathParams = field(default=None)
    

@dataclass
class ProtocolTftpSessionStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_tftp_session_status_200_application_json_string: Optional[str] = field(default=None)
    
