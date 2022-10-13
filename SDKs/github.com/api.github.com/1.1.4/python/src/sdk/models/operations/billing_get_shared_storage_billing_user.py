from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BillingGetSharedStorageBillingUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingGetSharedStorageBillingUserRequest:
    path_params: BillingGetSharedStorageBillingUserPathParams = field(default=None)
    

@dataclass
class BillingGetSharedStorageBillingUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    combined_billing_usage: Optional[shared.CombinedBillingUsage] = field(default=None)
    
