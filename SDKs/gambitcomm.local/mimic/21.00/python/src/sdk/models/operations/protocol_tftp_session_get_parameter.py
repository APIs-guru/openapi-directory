from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolTftpSessionGetParameterPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    parameter: str = field(metadata={'path_param': { 'field_name': 'parameter', 'style': 'simple', 'explode': False }})
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpSessionGetParameterRequest:
    path_params: ProtocolTftpSessionGetParameterPathParams = field()
    

@dataclass
class ProtocolTftpSessionGetParameterResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_tftp_session_get_parameter_200_application_json_string: Optional[str] = field(default=None)
    
