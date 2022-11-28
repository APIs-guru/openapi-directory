from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetGlobalRuleConfigRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclass
class GetGlobalRuleConfigPathParams:
    rule: GetGlobalRuleConfigRuleEnum = field(metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGlobalRuleConfigRequest:
    path_params: GetGlobalRuleConfigPathParams = field()
    

@dataclass
class GetGlobalRuleConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    rule: Optional[shared.Rule] = field(default=None)
    
