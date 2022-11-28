from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTftpSessionWritePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    srcfile: str = field(metadata={'path_param': { 'field_name': 'srcfile', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpSessionWriteRequest:
    path_params: ProtocolTftpSessionWritePathParams = field()
    

@dataclass
class ProtocolTftpSessionWriteResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_tftp_session_write_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
