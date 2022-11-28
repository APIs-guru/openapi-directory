from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTodGettimePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    num_retries: int = field(metadata={'path_param': { 'field_name': 'numRetries', 'style': 'simple', 'explode': False }})
    port_num: int = field(metadata={'path_param': { 'field_name': 'portNum', 'style': 'simple', 'explode': False }})
    script_name: str = field(metadata={'path_param': { 'field_name': 'scriptName', 'style': 'simple', 'explode': False }})
    server_addr: str = field(metadata={'path_param': { 'field_name': 'serverAddr', 'style': 'simple', 'explode': False }})
    time_sec: int = field(metadata={'path_param': { 'field_name': 'timeSec', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTodGettimeRequest:
    path_params: ProtocolTodGettimePathParams = field()
    

@dataclass
class ProtocolTodGettimeResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_tod_gettime_200_application_json_strings: Optional[List[str]] = field(default=None)
    
