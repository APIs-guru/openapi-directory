from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InteractionsSetRestrictionsForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class InteractionsSetRestrictionsForOrgRequest:
    path_params: InteractionsSetRestrictionsForOrgPathParams = field(default=None)
    request: Optional[shared.InteractionLimit] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InteractionsSetRestrictionsForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    interaction_limit_response: Optional[shared.InteractionLimitResponse] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
