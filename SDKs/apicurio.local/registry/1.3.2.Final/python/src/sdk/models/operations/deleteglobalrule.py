from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class DeleteGlobalRuleRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclass
class DeleteGlobalRulePathParams:
    rule: DeleteGlobalRuleRuleEnum = field(default=None, metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGlobalRuleRequest:
    path_params: DeleteGlobalRulePathParams = field(default=None)
    

@dataclass
class DeleteGlobalRuleResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
