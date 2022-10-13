from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetGithubActionsBillingOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetGithubActionsBillingOrgRequest:
    path_params: BillingGetGithubActionsBillingOrgPathParams = field(default=None)
    

@dataclass
class BillingGetGithubActionsBillingOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_billing_usage: Optional[shared.ActionsBillingUsage] = field(default=None)
    
