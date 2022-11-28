from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFulfillmentPoliciesQueryParams:
    marketplace_id: str = field(metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFulfillmentPoliciesSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFulfillmentPoliciesRequest:
    query_params: GetFulfillmentPoliciesQueryParams = field()
    security: GetFulfillmentPoliciesSecurity = field()
    

@dataclass
class GetFulfillmentPoliciesResponse:
    content_type: str = field()
    status_code: int = field()
    fulfillment_policy_response: Optional[shared.FulfillmentPolicyResponse] = field(default=None)
    
