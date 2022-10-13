from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTodGetStatisticsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTodGetStatisticsRequest:
    path_params: ProtocolTodGetStatisticsPathParams = field(default=None)
    

@dataclass
class ProtocolTodGetStatisticsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_tod_get_statistics_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
