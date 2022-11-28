from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetSharedStorageBillingUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetSharedStorageBillingUserRequest:
    path_params: BillingGetSharedStorageBillingUserPathParams = field()
    

@dataclass
class BillingGetSharedStorageBillingUserResponse:
    content_type: str = field()
    status_code: int = field()
    combined_billing_usage: Optional[shared.CombinedBillingUsage] = field(default=None)
    
