from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTodGettimePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    num_retries: int = field(default=None, metadata={'path_param': { 'field_name': 'numRetries', 'style': 'simple', 'explode': False }})
    port_num: int = field(default=None, metadata={'path_param': { 'field_name': 'portNum', 'style': 'simple', 'explode': False }})
    script_name: str = field(default=None, metadata={'path_param': { 'field_name': 'scriptName', 'style': 'simple', 'explode': False }})
    server_addr: str = field(default=None, metadata={'path_param': { 'field_name': 'serverAddr', 'style': 'simple', 'explode': False }})
    time_sec: int = field(default=None, metadata={'path_param': { 'field_name': 'timeSec', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTodGettimeRequest:
    path_params: ProtocolTodGettimePathParams = field(default=None)
    

@dataclass
class ProtocolTodGettimeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_tod_gettime_200_application_json_strings: Optional[List[str]] = field(default=None)
    
