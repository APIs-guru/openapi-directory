from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InteractionsGetRestrictionsForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class InteractionsGetRestrictionsForOrgRequest:
    path_params: InteractionsGetRestrictionsForOrgPathParams = field(default=None)
    

@dataclass
class InteractionsGetRestrictionsForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    interaction_limit_response: Optional[shared.InteractionLimitResponse] = field(default=None)
    
