from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSflowHaltPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSflowHaltRequest:
    path_params: ProtocolSflowHaltPathParams = field(default=None)
    

@dataclass
class ProtocolSflowHaltResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_sflow_halt_200_application_json_string: Optional[str] = field(default=None)
    
