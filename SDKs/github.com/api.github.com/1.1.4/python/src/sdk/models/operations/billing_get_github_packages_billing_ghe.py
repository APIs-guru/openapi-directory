from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetGithubPackagesBillingGhePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetGithubPackagesBillingGheRequest:
    path_params: BillingGetGithubPackagesBillingGhePathParams = field()
    

@dataclass
class BillingGetGithubPackagesBillingGheResponse:
    content_type: str = field()
    status_code: int = field()
    packages_billing_usage: Optional[shared.PackagesBillingUsage] = field(default=None)
    
