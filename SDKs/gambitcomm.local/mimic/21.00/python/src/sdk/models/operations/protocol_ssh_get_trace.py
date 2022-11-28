from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolSSHGetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSSHGetTraceRequest:
    path_params: ProtocolSSHGetTracePathParams = field()
    

@dataclass
class ProtocolSSHGetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    config_ssh: Optional[shared.ConfigSSH] = field(default=None)
    
