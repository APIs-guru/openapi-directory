from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolNetflowChangeDfsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    interval: int = field(default=None, metadata={'path_param': { 'field_name': 'interval', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowChangeDfsRequest:
    path_params: ProtocolNetflowChangeDfsPathParams = field(default=None)
    

@dataclass
class ProtocolNetflowChangeDfsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_netflow_change_dfs_200_application_json_string: Optional[str] = field(default=None)
    
