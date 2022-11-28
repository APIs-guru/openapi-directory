from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SetValidatePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    validate: int = field(metadata={'path_param': { 'field_name': 'validate', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetValidateRequest:
    path_params: SetValidatePathParams = field()
    

@dataclass
class SetValidateResponse:
    content_type: str = field()
    status_code: int = field()
    set_validate_200_application_json_int32_integer: Optional[int] = field(default=None)
    
