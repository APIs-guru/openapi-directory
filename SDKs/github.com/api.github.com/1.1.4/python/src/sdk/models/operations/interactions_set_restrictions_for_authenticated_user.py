from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InteractionsSetRestrictionsForAuthenticatedUserRequest:
    request: Optional[shared.InteractionLimit] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InteractionsSetRestrictionsForAuthenticatedUserResponse:
    content_type: str = field()
    status_code: int = field()
    interaction_limit_response: Optional[shared.InteractionLimitResponse] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
