from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetGithubPackagesBillingGhePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetGithubPackagesBillingGheRequest:
    path_params: BillingGetGithubPackagesBillingGhePathParams = field(default=None)
    

@dataclass
class BillingGetGithubPackagesBillingGheResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    packages_billing_usage: Optional[shared.PackagesBillingUsage] = field(default=None)
    
