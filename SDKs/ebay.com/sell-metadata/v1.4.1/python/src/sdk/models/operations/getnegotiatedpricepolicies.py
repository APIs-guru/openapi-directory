from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNegotiatedPricePoliciesPathParams:
    marketplace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNegotiatedPricePoliciesQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNegotiatedPricePoliciesSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetNegotiatedPricePoliciesRequest:
    path_params: GetNegotiatedPricePoliciesPathParams = field(default=None)
    query_params: GetNegotiatedPricePoliciesQueryParams = field(default=None)
    security: GetNegotiatedPricePoliciesSecurity = field(default=None)
    

@dataclass
class GetNegotiatedPricePoliciesResponse:
    content_type: str = field(default=None)
    negotiated_price_policy_response: Optional[shared.NegotiatedPricePolicyResponse] = field(default=None)
    status_code: int = field(default=None)
    
