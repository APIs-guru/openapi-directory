from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetGithubPackagesBillingUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetGithubPackagesBillingUserRequest:
    path_params: BillingGetGithubPackagesBillingUserPathParams = field(default=None)
    

@dataclass
class BillingGetGithubPackagesBillingUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    packages_billing_usage: Optional[shared.PackagesBillingUsage] = field(default=None)
    
