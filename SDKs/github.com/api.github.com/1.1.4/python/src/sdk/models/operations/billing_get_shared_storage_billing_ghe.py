from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetSharedStorageBillingGhePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetSharedStorageBillingGheRequest:
    path_params: BillingGetSharedStorageBillingGhePathParams = field()
    

@dataclass
class BillingGetSharedStorageBillingGheResponse:
    content_type: str = field()
    status_code: int = field()
    combined_billing_usage: Optional[shared.CombinedBillingUsage] = field(default=None)
    
