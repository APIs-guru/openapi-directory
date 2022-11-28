from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InteractionsGetRestrictionsForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class InteractionsGetRestrictionsForOrgRequest:
    path_params: InteractionsGetRestrictionsForOrgPathParams = field()
    

@dataclass
class InteractionsGetRestrictionsForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    interaction_limit_response: Optional[shared.InteractionLimitResponse] = field(default=None)
    
