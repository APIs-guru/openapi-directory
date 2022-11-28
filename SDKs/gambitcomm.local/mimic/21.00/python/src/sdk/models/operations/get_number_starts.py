from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumberStartsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNumberStartsRequest:
    path_params: GetNumberStartsPathParams = field()
    

@dataclass
class GetNumberStartsResponse:
    content_type: str = field()
    status_code: int = field()
    get_number_starts_200_application_json_int32_integer: Optional[int] = field(default=None)
    
