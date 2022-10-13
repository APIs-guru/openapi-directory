from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetValidatePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    validate: int = field(default=None, metadata={'path_param': { 'field_name': 'validate', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetValidateRequest:
    path_params: SetValidatePathParams = field(default=None)
    

@dataclass
class SetValidateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_validate_200_application_json_int32_integer: Optional[int] = field(default=None)
    
