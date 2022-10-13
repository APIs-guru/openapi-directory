from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateReturnPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateReturnPolicyRequest:
    request: shared.ReturnPolicyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateReturnPolicySecurity = field(default=None)
    

@dataclass
class CreateReturnPolicyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    set_return_policy_response: Optional[shared.SetReturnPolicyResponse] = field(default=None)
    status_code: int = field(default=None)
    
