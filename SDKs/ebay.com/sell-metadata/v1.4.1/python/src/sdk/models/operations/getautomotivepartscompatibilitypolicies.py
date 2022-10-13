from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAutomotivePartsCompatibilityPoliciesPathParams:
    marketplace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomotivePartsCompatibilityPoliciesQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAutomotivePartsCompatibilityPoliciesSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAutomotivePartsCompatibilityPoliciesRequest:
    path_params: GetAutomotivePartsCompatibilityPoliciesPathParams = field(default=None)
    query_params: GetAutomotivePartsCompatibilityPoliciesQueryParams = field(default=None)
    security: GetAutomotivePartsCompatibilityPoliciesSecurity = field(default=None)
    

@dataclass
class GetAutomotivePartsCompatibilityPoliciesResponse:
    automotive_parts_compatibility_policy_response: Optional[shared.AutomotivePartsCompatibilityPolicyResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
