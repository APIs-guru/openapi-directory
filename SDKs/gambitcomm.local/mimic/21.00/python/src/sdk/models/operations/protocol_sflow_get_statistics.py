from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolSflowGetStatisticsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSflowGetStatisticsRequest:
    path_params: ProtocolSflowGetStatisticsPathParams = field()
    

@dataclass
class ProtocolSflowGetStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_sflow_get_statistics_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
