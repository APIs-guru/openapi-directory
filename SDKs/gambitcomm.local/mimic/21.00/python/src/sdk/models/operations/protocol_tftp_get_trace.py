from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolTftpGetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpGetTraceRequest:
    path_params: ProtocolTftpGetTracePathParams = field(default=None)
    

@dataclass
class ProtocolTftpGetTraceResponse:
    config_tftp: Optional[shared.ConfigTftp] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
