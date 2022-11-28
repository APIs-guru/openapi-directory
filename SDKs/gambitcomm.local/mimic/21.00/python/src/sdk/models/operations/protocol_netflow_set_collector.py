from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolNetflowSetCollectorPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    collector_ip: str = field(metadata={'path_param': { 'field_name': 'collectorIP', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowSetCollectorRequest:
    path_params: ProtocolNetflowSetCollectorPathParams = field()
    

@dataclass
class ProtocolNetflowSetCollectorResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_netflow_set_collector_200_application_json_string: Optional[str] = field(default=None)
    
