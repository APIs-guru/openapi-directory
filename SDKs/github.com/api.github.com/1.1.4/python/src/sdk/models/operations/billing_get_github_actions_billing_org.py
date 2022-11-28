from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetGithubActionsBillingOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetGithubActionsBillingOrgRequest:
    path_params: BillingGetGithubActionsBillingOrgPathParams = field()
    

@dataclass
class BillingGetGithubActionsBillingOrgResponse:
    content_type: str = field()
    status_code: int = field()
    actions_billing_usage: Optional[shared.ActionsBillingUsage] = field(default=None)
    
