from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetGithubPackagesBillingOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetGithubPackagesBillingOrgRequest:
    path_params: BillingGetGithubPackagesBillingOrgPathParams = field()
    

@dataclass
class BillingGetGithubPackagesBillingOrgResponse:
    content_type: str = field()
    status_code: int = field()
    packages_billing_usage: Optional[shared.PackagesBillingUsage] = field(default=None)
    
