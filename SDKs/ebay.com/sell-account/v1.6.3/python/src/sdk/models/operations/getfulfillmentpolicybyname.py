from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFulfillmentPolicyByNameQueryParams:
    marketplace_id: str = field(metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFulfillmentPolicyByNameSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFulfillmentPolicyByNameRequest:
    query_params: GetFulfillmentPolicyByNameQueryParams = field()
    security: GetFulfillmentPolicyByNameSecurity = field()
    

@dataclass
class GetFulfillmentPolicyByNameResponse:
    content_type: str = field()
    status_code: int = field()
    fulfillment_policy: Optional[shared.FulfillmentPolicy] = field(default=None)
    
