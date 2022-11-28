from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ChangePasswordPoliciesConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangePasswordPoliciesConfigRequest:
    headers: ChangePasswordPoliciesConfigHeaders = field()
    request: shared.UpdatePasswordPoliciesConfig = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangePasswordPoliciesConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    password_policies_config: Optional[shared.PasswordPoliciesConfig] = field(default=None)
    
