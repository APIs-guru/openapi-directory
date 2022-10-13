from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSSHGetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSSHGetConfigRequest:
    path_params: ProtocolSSHGetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolSSHGetConfigResponse:
    config_ssh: Optional[shared.ConfigSSH] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
