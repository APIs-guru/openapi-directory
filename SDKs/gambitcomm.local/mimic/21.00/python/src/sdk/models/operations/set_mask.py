from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetMaskPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    mask: str = field(metadata={'path_param': { 'field_name': 'mask', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetMaskRequest:
    path_params: SetMaskPathParams = field()
    

@dataclass
class SetMaskResponse:
    content_type: str = field()
    status_code: int = field()
    set_mask_200_application_json_string: Optional[str] = field(default=None)
    
