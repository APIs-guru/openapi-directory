from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ProtocolTelnetServerGetUsersPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetServerGetUsersRequest:
    path_params: ProtocolTelnetServerGetUsersPathParams = field()
    

@dataclass
class ProtocolTelnetServerGetUsersResponse:
    content_type: str = field()
    status_code: int = field()
    telnet_users: Optional[List[shared.TelnetUser]] = field(default=None)
    
