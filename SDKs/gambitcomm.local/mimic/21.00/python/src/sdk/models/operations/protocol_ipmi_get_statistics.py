from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolIpmiGetStatisticsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolIpmiGetStatisticsRequest:
    path_params: ProtocolIpmiGetStatisticsPathParams = field(default=None)
    

@dataclass
class ProtocolIpmiGetStatisticsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_ipmi_get_statistics_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
