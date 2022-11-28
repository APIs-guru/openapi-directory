from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class UpdateGlobalRuleConfigRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclass
class UpdateGlobalRuleConfigPathParams:
    rule: UpdateGlobalRuleConfigRuleEnum = field(metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGlobalRuleConfigRequest:
    path_params: UpdateGlobalRuleConfigPathParams = field()
    request: shared.Rule = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateGlobalRuleConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    rule: Optional[shared.Rule] = field(default=None)
    
