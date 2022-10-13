from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolTftpGetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpGetConfigRequest:
    path_params: ProtocolTftpGetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolTftpGetConfigResponse:
    config_tftp: Optional[shared.ConfigTftp] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
