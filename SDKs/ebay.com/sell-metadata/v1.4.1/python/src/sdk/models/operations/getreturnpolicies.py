from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReturnPoliciesPathParams:
    marketplace_id: str = field(metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReturnPoliciesQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReturnPoliciesSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReturnPoliciesRequest:
    path_params: GetReturnPoliciesPathParams = field()
    query_params: GetReturnPoliciesQueryParams = field()
    security: GetReturnPoliciesSecurity = field()
    

@dataclass
class GetReturnPoliciesResponse:
    content_type: str = field()
    status_code: int = field()
    return_policy_response: Optional[shared.ReturnPolicyResponse] = field(default=None)
    
