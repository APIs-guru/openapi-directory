from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFulfillmentPoliciesQueryParams:
    marketplace_id: str = field(default=None, metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFulfillmentPoliciesSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFulfillmentPoliciesRequest:
    query_params: GetFulfillmentPoliciesQueryParams = field(default=None)
    security: GetFulfillmentPoliciesSecurity = field(default=None)
    

@dataclass
class GetFulfillmentPoliciesResponse:
    content_type: str = field(default=None)
    fulfillment_policy_response: Optional[shared.FulfillmentPolicyResponse] = field(default=None)
    status_code: int = field(default=None)
    
