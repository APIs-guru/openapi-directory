from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateGlobalRuleRequest:
    request: shared.Rule = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGlobalRuleResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
