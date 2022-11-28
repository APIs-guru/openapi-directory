from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateReturnPolicyPathParams:
    return_policy_id: str = field(metadata={'path_param': { 'field_name': 'return_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateReturnPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateReturnPolicyRequest:
    path_params: UpdateReturnPolicyPathParams = field()
    request: shared.ReturnPolicyRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateReturnPolicySecurity = field()
    

@dataclass
class UpdateReturnPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    set_return_policy_response: Optional[shared.SetReturnPolicyResponse] = field(default=None)
    
