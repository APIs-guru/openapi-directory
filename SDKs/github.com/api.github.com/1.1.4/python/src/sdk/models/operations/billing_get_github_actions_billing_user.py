from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetGithubActionsBillingUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetGithubActionsBillingUserRequest:
    path_params: BillingGetGithubActionsBillingUserPathParams = field(default=None)
    

@dataclass
class BillingGetGithubActionsBillingUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_billing_usage: Optional[shared.ActionsBillingUsage] = field(default=None)
    
