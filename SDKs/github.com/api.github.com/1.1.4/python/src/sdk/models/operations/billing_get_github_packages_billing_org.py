from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetGithubPackagesBillingOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetGithubPackagesBillingOrgRequest:
    path_params: BillingGetGithubPackagesBillingOrgPathParams = field(default=None)
    

@dataclass
class BillingGetGithubPackagesBillingOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    packages_billing_usage: Optional[shared.PackagesBillingUsage] = field(default=None)
    
