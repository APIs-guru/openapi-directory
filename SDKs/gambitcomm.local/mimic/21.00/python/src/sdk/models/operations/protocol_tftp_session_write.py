from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTftpSessionWritePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    srcfile: str = field(default=None, metadata={'path_param': { 'field_name': 'srcfile', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpSessionWriteRequest:
    path_params: ProtocolTftpSessionWritePathParams = field(default=None)
    

@dataclass
class ProtocolTftpSessionWriteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_tftp_session_write_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
