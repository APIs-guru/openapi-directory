from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class DeleteGlobalRuleRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclass
class DeleteGlobalRulePathParams:
    rule: DeleteGlobalRuleRuleEnum = field(metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGlobalRuleRequest:
    path_params: DeleteGlobalRulePathParams = field()
    

@dataclass
class DeleteGlobalRuleResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
