from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSflowReloadPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSflowReloadRequest:
    path_params: ProtocolSflowReloadPathParams = field(default=None)
    

@dataclass
class ProtocolSflowReloadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_sflow_reload_200_application_json_string: Optional[str] = field(default=None)
    
