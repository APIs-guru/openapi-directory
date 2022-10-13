from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InteractionsSetRestrictionsForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class InteractionsSetRestrictionsForRepoRequest:
    path_params: InteractionsSetRestrictionsForRepoPathParams = field(default=None)
    request: Optional[shared.InteractionLimit] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InteractionsSetRestrictionsForRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    interaction_limit_response: Optional[shared.InteractionLimitResponse] = field(default=None)
    
