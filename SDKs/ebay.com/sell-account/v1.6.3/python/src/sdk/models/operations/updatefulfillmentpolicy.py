from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateFulfillmentPolicyPathParams:
    fulfillment_policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fulfillmentPolicyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFulfillmentPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateFulfillmentPolicyRequest:
    path_params: UpdateFulfillmentPolicyPathParams = field(default=None)
    request: shared.FulfillmentPolicyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateFulfillmentPolicySecurity = field(default=None)
    

@dataclass
class UpdateFulfillmentPolicyResponse:
    content_type: str = field(default=None)
    set_fulfillment_policy_response: Optional[shared.SetFulfillmentPolicyResponse] = field(default=None)
    status_code: int = field(default=None)
    
