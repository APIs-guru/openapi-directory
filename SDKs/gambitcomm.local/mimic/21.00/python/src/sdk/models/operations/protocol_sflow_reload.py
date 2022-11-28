from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSflowReloadPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSflowReloadRequest:
    path_params: ProtocolSflowReloadPathParams = field()
    

@dataclass
class ProtocolSflowReloadResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_sflow_reload_200_application_json_string: Optional[str] = field(default=None)
    
