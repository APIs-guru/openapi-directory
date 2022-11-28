from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReturnPolicyByNameQueryParams:
    marketplace_id: str = field(metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReturnPolicyByNameSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReturnPolicyByNameRequest:
    query_params: GetReturnPolicyByNameQueryParams = field()
    security: GetReturnPolicyByNameSecurity = field()
    

@dataclass
class GetReturnPolicyByNameResponse:
    content_type: str = field()
    status_code: int = field()
    return_policy: Optional[shared.ReturnPolicy] = field(default=None)
    
