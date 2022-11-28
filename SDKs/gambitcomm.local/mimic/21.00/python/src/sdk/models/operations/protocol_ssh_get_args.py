from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProtocolSSHGetArgsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSSHGetArgsRequest:
    path_params: ProtocolSSHGetArgsPathParams = field()
    

@dataclass
class ProtocolSSHGetArgsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_ssh_get_args_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
