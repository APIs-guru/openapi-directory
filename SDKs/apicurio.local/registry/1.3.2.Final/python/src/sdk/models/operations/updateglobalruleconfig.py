from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class UpdateGlobalRuleConfigRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclass
class UpdateGlobalRuleConfigPathParams:
    rule: UpdateGlobalRuleConfigRuleEnum = field(default=None, metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGlobalRuleConfigRequest:
    path_params: UpdateGlobalRuleConfigPathParams = field(default=None)
    request: shared.Rule = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateGlobalRuleConfigResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    rule: Optional[shared.Rule] = field(default=None)
    status_code: int = field(default=None)
    
