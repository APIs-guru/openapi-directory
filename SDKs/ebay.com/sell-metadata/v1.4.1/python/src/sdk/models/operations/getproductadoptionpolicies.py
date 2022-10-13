from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProductAdoptionPoliciesPathParams:
    marketplace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductAdoptionPoliciesQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductAdoptionPoliciesSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProductAdoptionPoliciesRequest:
    path_params: GetProductAdoptionPoliciesPathParams = field(default=None)
    query_params: GetProductAdoptionPoliciesQueryParams = field(default=None)
    security: GetProductAdoptionPoliciesSecurity = field(default=None)
    

@dataclass
class GetProductAdoptionPoliciesResponse:
    content_type: str = field(default=None)
    product_adoption_policy_response: Optional[shared.ProductAdoptionPolicyResponse] = field(default=None)
    status_code: int = field(default=None)
    
