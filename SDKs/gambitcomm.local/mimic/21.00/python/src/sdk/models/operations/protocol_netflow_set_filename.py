from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolNetflowSetFileNamePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    file_name: str = field(metadata={'path_param': { 'field_name': 'fileName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowSetFileNameRequest:
    path_params: ProtocolNetflowSetFileNamePathParams = field()
    

@dataclass
class ProtocolNetflowSetFileNameResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_netflow_set_file_name_200_application_json_string: Optional[str] = field(default=None)
    
