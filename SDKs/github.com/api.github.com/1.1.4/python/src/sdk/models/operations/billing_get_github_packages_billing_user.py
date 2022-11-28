from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetGithubPackagesBillingUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetGithubPackagesBillingUserRequest:
    path_params: BillingGetGithubPackagesBillingUserPathParams = field()
    

@dataclass
class BillingGetGithubPackagesBillingUserResponse:
    content_type: str = field()
    status_code: int = field()
    packages_billing_usage: Optional[shared.PackagesBillingUsage] = field(default=None)
    
