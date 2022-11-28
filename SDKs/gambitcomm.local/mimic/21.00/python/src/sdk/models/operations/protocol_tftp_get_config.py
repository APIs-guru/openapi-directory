from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolTftpGetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpGetConfigRequest:
    path_params: ProtocolTftpGetConfigPathParams = field()
    

@dataclass
class ProtocolTftpGetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    config_tftp: Optional[shared.ConfigTftp] = field(default=None)
    
