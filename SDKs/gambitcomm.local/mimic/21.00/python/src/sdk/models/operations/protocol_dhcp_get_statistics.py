from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolDhcpGetStatisticsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolDhcpGetStatisticsRequest:
    path_params: ProtocolDhcpGetStatisticsPathParams = field()
    

@dataclass
class ProtocolDhcpGetStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_dhcp_get_statistics_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
