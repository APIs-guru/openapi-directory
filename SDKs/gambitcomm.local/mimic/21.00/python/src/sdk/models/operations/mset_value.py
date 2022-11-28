from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class MsetValuePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class MsetValueRequest:
    path_params: MsetValuePathParams = field()
    request: Optional[List[List[str]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MsetValueResponse:
    content_type: str = field()
    status_code: int = field()
    mset_value_200_application_json_string: Optional[str] = field(default=None)
    
