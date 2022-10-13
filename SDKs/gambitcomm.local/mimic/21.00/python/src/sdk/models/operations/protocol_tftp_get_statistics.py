from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTftpGetStatisticsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTftpGetStatisticsRequest:
    path_params: ProtocolTftpGetStatisticsPathParams = field(default=None)
    

@dataclass
class ProtocolTftpGetStatisticsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_tftp_get_statistics_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
