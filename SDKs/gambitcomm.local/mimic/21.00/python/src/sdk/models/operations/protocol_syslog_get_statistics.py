from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolSyslogGetStatisticsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSyslogGetStatisticsRequest:
    path_params: ProtocolSyslogGetStatisticsPathParams = field()
    

@dataclass
class ProtocolSyslogGetStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_syslog_get_statistics_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
