from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateFulfillmentPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFulfillmentPolicyRequest:
    request: shared.FulfillmentPolicyRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFulfillmentPolicySecurity = field()
    

@dataclass
class CreateFulfillmentPolicyResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    set_fulfillment_policy_response: Optional[shared.SetFulfillmentPolicyResponse] = field(default=None)
    
