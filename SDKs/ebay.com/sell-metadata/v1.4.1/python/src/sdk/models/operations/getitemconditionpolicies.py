from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItemConditionPoliciesPathParams:
    marketplace_id: str = field(metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemConditionPoliciesQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItemConditionPoliciesSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetItemConditionPoliciesRequest:
    path_params: GetItemConditionPoliciesPathParams = field()
    query_params: GetItemConditionPoliciesQueryParams = field()
    security: GetItemConditionPoliciesSecurity = field()
    

@dataclass
class GetItemConditionPoliciesResponse:
    content_type: str = field()
    status_code: int = field()
    item_condition_policy_response: Optional[shared.ItemConditionPolicyResponse] = field(default=None)
    
