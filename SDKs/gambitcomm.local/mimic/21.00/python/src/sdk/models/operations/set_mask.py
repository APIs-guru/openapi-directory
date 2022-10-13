from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetMaskPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    mask: str = field(default=None, metadata={'path_param': { 'field_name': 'mask', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetMaskRequest:
    path_params: SetMaskPathParams = field(default=None)
    

@dataclass
class SetMaskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_mask_200_application_json_string: Optional[str] = field(default=None)
    
