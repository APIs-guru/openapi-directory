from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFulfillmentPolicyPathParams:
    fulfillment_policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fulfillmentPolicyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFulfillmentPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFulfillmentPolicyRequest:
    path_params: GetFulfillmentPolicyPathParams = field(default=None)
    security: GetFulfillmentPolicySecurity = field(default=None)
    

@dataclass
class GetFulfillmentPolicyResponse:
    content_type: str = field(default=None)
    fulfillment_policy: Optional[shared.FulfillmentPolicy] = field(default=None)
    status_code: int = field(default=None)
    
