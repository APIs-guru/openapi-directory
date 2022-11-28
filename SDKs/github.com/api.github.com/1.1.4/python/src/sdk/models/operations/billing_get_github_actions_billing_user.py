from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetGithubActionsBillingUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetGithubActionsBillingUserRequest:
    path_params: BillingGetGithubActionsBillingUserPathParams = field()
    

@dataclass
class BillingGetGithubActionsBillingUserResponse:
    content_type: str = field()
    status_code: int = field()
    actions_billing_usage: Optional[shared.ActionsBillingUsage] = field(default=None)
    
