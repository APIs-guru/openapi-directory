from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetGlobalRuleConfigRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclass
class GetGlobalRuleConfigPathParams:
    rule: GetGlobalRuleConfigRuleEnum = field(default=None, metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGlobalRuleConfigRequest:
    path_params: GetGlobalRuleConfigPathParams = field(default=None)
    

@dataclass
class GetGlobalRuleConfigResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    rule: Optional[shared.Rule] = field(default=None)
    status_code: int = field(default=None)
    
