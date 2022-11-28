from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class MunsetValuePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class MunsetValueRequest:
    path_params: MunsetValuePathParams = field()
    request: Optional[List[List[str]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MunsetValueResponse:
    content_type: str = field()
    status_code: int = field()
    munset_value_200_application_json_string: Optional[str] = field(default=None)
    
