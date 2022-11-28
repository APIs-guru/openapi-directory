from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetValidatePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetValidateRequest:
    path_params: GetValidatePathParams = field()
    

@dataclass
class GetValidateResponse:
    content_type: str = field()
    status_code: int = field()
    get_validate_200_application_json_int32_integer: Optional[int] = field(default=None)
    
