from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetListingStructurePoliciesPathParams:
    marketplace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingStructurePoliciesQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingStructurePoliciesSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListingStructurePoliciesRequest:
    path_params: GetListingStructurePoliciesPathParams = field(default=None)
    query_params: GetListingStructurePoliciesQueryParams = field(default=None)
    security: GetListingStructurePoliciesSecurity = field(default=None)
    

@dataclass
class GetListingStructurePoliciesResponse:
    content_type: str = field(default=None)
    listing_structure_policy_response: Optional[shared.ListingStructurePolicyResponse] = field(default=None)
    status_code: int = field(default=None)
    
