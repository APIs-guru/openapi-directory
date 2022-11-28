from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InteractionsGetRestrictionsForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class InteractionsGetRestrictionsForRepoRequest:
    path_params: InteractionsGetRestrictionsForRepoPathParams = field()
    

@dataclass
class InteractionsGetRestrictionsForRepoResponse:
    content_type: str = field()
    status_code: int = field()
    interaction_limit_response: Optional[shared.InteractionLimitResponse] = field(default=None)
    
