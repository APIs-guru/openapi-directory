from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdatePaymentPolicyPathParams:
    payment_policy_id: str = field(metadata={'path_param': { 'field_name': 'payment_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePaymentPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePaymentPolicyRequest:
    path_params: UpdatePaymentPolicyPathParams = field()
    request: shared.PaymentPolicyRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePaymentPolicySecurity = field()
    

@dataclass
class UpdatePaymentPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    set_payment_policy_response: Optional[shared.SetPaymentPolicyResponse] = field(default=None)
    
