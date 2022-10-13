from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReturnPoliciesQueryParams:
    marketplace_id: str = field(default=None, metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReturnPoliciesSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReturnPoliciesRequest:
    query_params: GetReturnPoliciesQueryParams = field(default=None)
    security: GetReturnPoliciesSecurity = field(default=None)
    

@dataclass
class GetReturnPoliciesResponse:
    content_type: str = field(default=None)
    return_policy_response: Optional[shared.ReturnPolicyResponse] = field(default=None)
    status_code: int = field(default=None)
    
