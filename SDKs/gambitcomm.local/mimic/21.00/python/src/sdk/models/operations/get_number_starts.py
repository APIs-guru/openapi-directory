from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumberStartsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNumberStartsRequest:
    path_params: GetNumberStartsPathParams = field(default=None)
    

@dataclass
class GetNumberStartsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_number_starts_200_application_json_int32_integer: Optional[int] = field(default=None)
    
