from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFulfillmentPolicyByNameQueryParams:
    marketplace_id: str = field(default=None, metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFulfillmentPolicyByNameSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFulfillmentPolicyByNameRequest:
    query_params: GetFulfillmentPolicyByNameQueryParams = field(default=None)
    security: GetFulfillmentPolicyByNameSecurity = field(default=None)
    

@dataclass
class GetFulfillmentPolicyByNameResponse:
    content_type: str = field(default=None)
    fulfillment_policy: Optional[shared.FulfillmentPolicy] = field(default=None)
    status_code: int = field(default=None)
    
