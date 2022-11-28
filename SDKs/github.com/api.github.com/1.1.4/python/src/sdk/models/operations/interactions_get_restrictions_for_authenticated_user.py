from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InteractionsGetRestrictionsForAuthenticatedUserResponse:
    content_type: str = field()
    status_code: int = field()
    interaction_limit_response: Optional[shared.InteractionLimitResponse] = field(default=None)
    
