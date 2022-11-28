from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolNetflowReloadPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowReloadRequest:
    path_params: ProtocolNetflowReloadPathParams = field()
    

@dataclass
class ProtocolNetflowReloadResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_netflow_reload_200_application_json_string: Optional[str] = field(default=None)
    
