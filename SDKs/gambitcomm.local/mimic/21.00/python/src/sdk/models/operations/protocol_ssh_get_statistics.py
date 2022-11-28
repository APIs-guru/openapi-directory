from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolSSHGetStatisticsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSSHGetStatisticsRequest:
    path_params: ProtocolSSHGetStatisticsPathParams = field()
    

@dataclass
class ProtocolSSHGetStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_ssh_get_statistics_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
