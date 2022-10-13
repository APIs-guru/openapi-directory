from dataclasses import dataclass, field



@dataclass
class DeletePaymentPolicyPathParams:
    payment_policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payment_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePaymentPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeletePaymentPolicyRequest:
    path_params: DeletePaymentPolicyPathParams = field(default=None)
    security: DeletePaymentPolicySecurity = field(default=None)
    

@dataclass
class DeletePaymentPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
