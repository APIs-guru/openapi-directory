from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateFulfillmentPolicyPathParams:
    fulfillment_policy_id: str = field(metadata={'path_param': { 'field_name': 'fulfillmentPolicyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFulfillmentPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateFulfillmentPolicyRequest:
    path_params: UpdateFulfillmentPolicyPathParams = field()
    request: shared.FulfillmentPolicyRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateFulfillmentPolicySecurity = field()
    

@dataclass
class UpdateFulfillmentPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    set_fulfillment_policy_response: Optional[shared.SetFulfillmentPolicyResponse] = field(default=None)
    
