from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InteractionsSetRestrictionsForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class InteractionsSetRestrictionsForOrgRequest:
    path_params: InteractionsSetRestrictionsForOrgPathParams = field()
    request: Optional[shared.InteractionLimit] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InteractionsSetRestrictionsForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    interaction_limit_response: Optional[shared.InteractionLimitResponse] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
