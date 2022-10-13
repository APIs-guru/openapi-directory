from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTftpSessionReadPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    srcfile: str = field(default=None, metadata={'path_param': { 'field_name': 'srcfile', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpSessionReadRequest:
    path_params: ProtocolTftpSessionReadPathParams = field(default=None)
    

@dataclass
class ProtocolTftpSessionReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_tftp_session_read_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
