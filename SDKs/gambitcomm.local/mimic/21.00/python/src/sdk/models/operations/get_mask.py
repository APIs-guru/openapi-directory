from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMaskPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMaskRequest:
    path_params: GetMaskPathParams = field()
    

@dataclass
class GetMaskResponse:
    content_type: str = field()
    status_code: int = field()
    get_mask_200_application_json_string: Optional[str] = field(default=None)
    
