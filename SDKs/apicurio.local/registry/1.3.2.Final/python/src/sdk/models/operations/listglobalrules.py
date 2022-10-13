from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ListGlobalRulesResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    rule_types: Optional[List[shared.RuleTypeEnum]] = field(default=None)
    status_code: int = field(default=None)
    
