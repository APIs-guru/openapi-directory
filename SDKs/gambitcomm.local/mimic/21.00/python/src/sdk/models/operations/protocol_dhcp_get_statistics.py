from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolDhcpGetStatisticsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolDhcpGetStatisticsRequest:
    path_params: ProtocolDhcpGetStatisticsPathParams = field(default=None)
    

@dataclass
class ProtocolDhcpGetStatisticsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_dhcp_get_statistics_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
