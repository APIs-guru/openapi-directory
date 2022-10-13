from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolNetflowSetFileNamePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    file_name: str = field(default=None, metadata={'path_param': { 'field_name': 'fileName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowSetFileNameRequest:
    path_params: ProtocolNetflowSetFileNamePathParams = field(default=None)
    

@dataclass
class ProtocolNetflowSetFileNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_netflow_set_file_name_200_application_json_string: Optional[str] = field(default=None)
    
