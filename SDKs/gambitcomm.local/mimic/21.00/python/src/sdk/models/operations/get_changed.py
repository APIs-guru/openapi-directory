from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetChangedPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChangedRequest:
    path_params: GetChangedPathParams = field()
    

@dataclass
class GetChangedResponse:
    content_type: str = field()
    status_code: int = field()
    get_changed_200_application_json_int32_integer: Optional[int] = field(default=None)
    
