from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteFulfillmentPolicyPathParams:
    fulfillment_policy_id: str = field(metadata={'path_param': { 'field_name': 'fulfillmentPolicyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFulfillmentPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFulfillmentPolicyRequest:
    path_params: DeleteFulfillmentPolicyPathParams = field()
    security: DeleteFulfillmentPolicySecurity = field()
    

@dataclass
class DeleteFulfillmentPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    
