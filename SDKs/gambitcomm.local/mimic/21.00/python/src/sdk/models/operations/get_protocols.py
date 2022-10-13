from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetProtocolsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProtocolsRequest:
    path_params: GetProtocolsPathParams = field(default=None)
    

@dataclass
class GetProtocolsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_protocols_200_application_json_strings: Optional[List[str]] = field(default=None)
    
