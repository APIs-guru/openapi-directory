from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class MsetValuePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class MsetValueRequest:
    path_params: MsetValuePathParams = field(default=None)
    request: Optional[List[List[str]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MsetValueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    mset_value_200_application_json_string: Optional[str] = field(default=None)
    
