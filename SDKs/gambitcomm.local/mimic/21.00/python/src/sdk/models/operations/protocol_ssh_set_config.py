from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSSHSetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    argument: str = field(metadata={'path_param': { 'field_name': 'argument', 'style': 'simple', 'explode': False }})
    value: str = field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSSHSetConfigRequest:
    path_params: ProtocolSSHSetConfigPathParams = field()
    

@dataclass
class ProtocolSSHSetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_ssh_set_config_200_application_json_string: Optional[str] = field(default=None)
    
