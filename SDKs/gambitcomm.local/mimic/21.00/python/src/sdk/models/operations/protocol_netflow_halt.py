from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolNetflowHaltPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowHaltRequest:
    path_params: ProtocolNetflowHaltPathParams = field(default=None)
    

@dataclass
class ProtocolNetflowHaltResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_netflow_halt_200_application_json_string: Optional[str] = field(default=None)
    
