from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class SetProtocolsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetProtocolsRequest:
    path_params: SetProtocolsPathParams = field(default=None)
    request: List[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetProtocolsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_protocols_200_application_json_string_integers: Optional[List[int]] = field(default=None)
    
