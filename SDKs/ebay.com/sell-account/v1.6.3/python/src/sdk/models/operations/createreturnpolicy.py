from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateReturnPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateReturnPolicyRequest:
    request: shared.ReturnPolicyRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateReturnPolicySecurity = field()
    

@dataclass
class CreateReturnPolicyResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    set_return_policy_response: Optional[shared.SetReturnPolicyResponse] = field(default=None)
    
