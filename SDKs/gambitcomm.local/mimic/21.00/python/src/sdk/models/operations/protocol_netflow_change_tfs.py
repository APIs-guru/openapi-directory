from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolNetflowChangeTfsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    interval: int = field(metadata={'path_param': { 'field_name': 'interval', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowChangeTfsRequest:
    path_params: ProtocolNetflowChangeTfsPathParams = field()
    

@dataclass
class ProtocolNetflowChangeTfsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_netflow_change_tfs_200_application_json_string: Optional[str] = field(default=None)
    
