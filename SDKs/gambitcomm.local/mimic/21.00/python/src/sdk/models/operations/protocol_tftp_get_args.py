from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProtocolTftpGetArgsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpGetArgsRequest:
    path_params: ProtocolTftpGetArgsPathParams = field()
    

@dataclass
class ProtocolTftpGetArgsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_tftp_get_args_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
