from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class SetProtocolsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetProtocolsRequest:
    path_params: SetProtocolsPathParams = field()
    request: List[str] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetProtocolsResponse:
    content_type: str = field()
    status_code: int = field()
    set_protocols_200_application_json_string_integers: Optional[List[int]] = field(default=None)
    
