from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetGithubActionsBillingGhePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetGithubActionsBillingGheRequest:
    path_params: BillingGetGithubActionsBillingGhePathParams = field(default=None)
    

@dataclass
class BillingGetGithubActionsBillingGheResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_billing_usage: Optional[shared.ActionsBillingUsage] = field(default=None)
    
