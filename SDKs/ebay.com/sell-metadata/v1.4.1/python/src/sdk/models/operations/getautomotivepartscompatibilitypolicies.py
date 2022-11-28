from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAutomotivePartsCompatibilityPoliciesPathParams:
    marketplace_id: str = field(metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomotivePartsCompatibilityPoliciesQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAutomotivePartsCompatibilityPoliciesSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAutomotivePartsCompatibilityPoliciesRequest:
    path_params: GetAutomotivePartsCompatibilityPoliciesPathParams = field()
    query_params: GetAutomotivePartsCompatibilityPoliciesQueryParams = field()
    security: GetAutomotivePartsCompatibilityPoliciesSecurity = field()
    

@dataclass
class GetAutomotivePartsCompatibilityPoliciesResponse:
    content_type: str = field()
    status_code: int = field()
    automotive_parts_compatibility_policy_response: Optional[shared.AutomotivePartsCompatibilityPolicyResponse] = field(default=None)
    
