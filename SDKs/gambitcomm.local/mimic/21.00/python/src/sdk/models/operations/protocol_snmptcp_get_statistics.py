from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolSnmptcpGetStatisticsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmptcpGetStatisticsRequest:
    path_params: ProtocolSnmptcpGetStatisticsPathParams = field(default=None)
    

@dataclass
class ProtocolSnmptcpGetStatisticsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmptcp_get_statistics_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
