from dataclasses import dataclass, field



@dataclass
class DeleteFulfillmentPolicyPathParams:
    fulfillment_policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fulfillmentPolicyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFulfillmentPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFulfillmentPolicyRequest:
    path_params: DeleteFulfillmentPolicyPathParams = field(default=None)
    security: DeleteFulfillmentPolicySecurity = field(default=None)
    

@dataclass
class DeleteFulfillmentPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
