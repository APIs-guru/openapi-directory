from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolTftpSessionSetParameterPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    parameter: str = field(metadata={'path_param': { 'field_name': 'parameter', 'style': 'simple', 'explode': False }})
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionID', 'style': 'simple', 'explode': False }})
    value: str = field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpSessionSetParameterRequest:
    path_params: ProtocolTftpSessionSetParameterPathParams = field()
    

@dataclass
class ProtocolTftpSessionSetParameterResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_tftp_session_set_parameter_200_application_json_string: Optional[str] = field(default=None)
    
