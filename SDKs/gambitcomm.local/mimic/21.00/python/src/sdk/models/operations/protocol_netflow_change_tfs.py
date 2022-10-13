from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolNetflowChangeTfsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    interval: int = field(default=None, metadata={'path_param': { 'field_name': 'interval', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowChangeTfsRequest:
    path_params: ProtocolNetflowChangeTfsPathParams = field(default=None)
    

@dataclass
class ProtocolNetflowChangeTfsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_netflow_change_tfs_200_application_json_string: Optional[str] = field(default=None)
    
