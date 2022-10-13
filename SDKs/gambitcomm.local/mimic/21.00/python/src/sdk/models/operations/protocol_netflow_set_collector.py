from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolNetflowSetCollectorPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    collector_ip: str = field(default=None, metadata={'path_param': { 'field_name': 'collectorIP', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowSetCollectorRequest:
    path_params: ProtocolNetflowSetCollectorPathParams = field(default=None)
    

@dataclass
class ProtocolNetflowSetCollectorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_netflow_set_collector_200_application_json_string: Optional[str] = field(default=None)
    
