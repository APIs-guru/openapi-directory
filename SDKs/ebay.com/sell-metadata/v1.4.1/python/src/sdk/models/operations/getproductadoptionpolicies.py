from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProductAdoptionPoliciesPathParams:
    marketplace_id: str = field(metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductAdoptionPoliciesQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductAdoptionPoliciesSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProductAdoptionPoliciesRequest:
    path_params: GetProductAdoptionPoliciesPathParams = field()
    query_params: GetProductAdoptionPoliciesQueryParams = field()
    security: GetProductAdoptionPoliciesSecurity = field()
    

@dataclass
class GetProductAdoptionPoliciesResponse:
    content_type: str = field()
    status_code: int = field()
    product_adoption_policy_response: Optional[shared.ProductAdoptionPolicyResponse] = field(default=None)
    
