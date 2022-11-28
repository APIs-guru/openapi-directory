from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetGithubActionsBillingGhePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetGithubActionsBillingGheRequest:
    path_params: BillingGetGithubActionsBillingGhePathParams = field()
    

@dataclass
class BillingGetGithubActionsBillingGheResponse:
    content_type: str = field()
    status_code: int = field()
    actions_billing_usage: Optional[shared.ActionsBillingUsage] = field(default=None)
    
