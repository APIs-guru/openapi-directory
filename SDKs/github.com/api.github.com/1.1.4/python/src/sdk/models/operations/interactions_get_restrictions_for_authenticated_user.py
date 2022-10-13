from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InteractionsGetRestrictionsForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    interaction_limit_response: Optional[shared.InteractionLimitResponse] = field(default=None)
    
