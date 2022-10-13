from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetSharedStorageBillingOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetSharedStorageBillingOrgRequest:
    path_params: BillingGetSharedStorageBillingOrgPathParams = field(default=None)
    

@dataclass
class BillingGetSharedStorageBillingOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    combined_billing_usage: Optional[shared.CombinedBillingUsage] = field(default=None)
    
