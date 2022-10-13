from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateFulfillmentPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFulfillmentPolicyRequest:
    request: shared.FulfillmentPolicyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFulfillmentPolicySecurity = field(default=None)
    

@dataclass
class CreateFulfillmentPolicyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    set_fulfillment_policy_response: Optional[shared.SetFulfillmentPolicyResponse] = field(default=None)
    status_code: int = field(default=None)
    
