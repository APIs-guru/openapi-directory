from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestCustomerKeyPairHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestCustomerKeyPairRequest:
    headers: RequestCustomerKeyPairHeaders = field()
    

@dataclass
class RequestCustomerKeyPairResponseOutput:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    user_key_pair_container: Optional[shared.UserKeyPairContainerOutput] = field(default=None)
    
