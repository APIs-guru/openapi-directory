from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolTftpSessionStartPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpSessionStartRequest:
    path_params: ProtocolTftpSessionStartPathParams = field()
    

@dataclass
class ProtocolTftpSessionStartResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_tftp_session_start_200_application_json_string: Optional[str] = field(default=None)
    
