from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestCustomerKeyPairHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestCustomerKeyPairRequest:
    headers: RequestCustomerKeyPairHeaders = field(default=None)
    

@dataclass
class RequestCustomerKeyPairResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    user_key_pair_container: Optional[shared.UserKeyPairContainer] = field(default=None)
    
