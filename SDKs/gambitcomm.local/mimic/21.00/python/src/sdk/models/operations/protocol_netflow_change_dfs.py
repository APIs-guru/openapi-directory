from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolNetflowChangeDfsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    interval: int = field(metadata={'path_param': { 'field_name': 'interval', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowChangeDfsRequest:
    path_params: ProtocolNetflowChangeDfsPathParams = field()
    

@dataclass
class ProtocolNetflowChangeDfsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_netflow_change_dfs_200_application_json_string: Optional[str] = field(default=None)
    
