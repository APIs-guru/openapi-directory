from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolNetflowReloadPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowReloadRequest:
    path_params: ProtocolNetflowReloadPathParams = field(default=None)
    

@dataclass
class ProtocolNetflowReloadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_netflow_reload_200_application_json_string: Optional[str] = field(default=None)
    
