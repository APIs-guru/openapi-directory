from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetSharedStorageBillingOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetSharedStorageBillingOrgRequest:
    path_params: BillingGetSharedStorageBillingOrgPathParams = field()
    

@dataclass
class BillingGetSharedStorageBillingOrgResponse:
    content_type: str = field()
    status_code: int = field()
    combined_billing_usage: Optional[shared.CombinedBillingUsage] = field(default=None)
    
