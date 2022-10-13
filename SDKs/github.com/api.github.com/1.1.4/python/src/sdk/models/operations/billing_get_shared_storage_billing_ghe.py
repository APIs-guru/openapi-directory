from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetSharedStorageBillingGhePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetSharedStorageBillingGheRequest:
    path_params: BillingGetSharedStorageBillingGhePathParams = field(default=None)
    

@dataclass
class BillingGetSharedStorageBillingGheResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    combined_billing_usage: Optional[shared.CombinedBillingUsage] = field(default=None)
    
