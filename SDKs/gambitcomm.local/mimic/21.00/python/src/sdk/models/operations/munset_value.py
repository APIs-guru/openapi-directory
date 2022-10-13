from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class MunsetValuePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class MunsetValueRequest:
    path_params: MunsetValuePathParams = field(default=None)
    request: Optional[List[List[str]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MunsetValueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    munset_value_200_application_json_string: Optional[str] = field(default=None)
    
