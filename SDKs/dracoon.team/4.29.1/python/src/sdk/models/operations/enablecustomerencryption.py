from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnableCustomerEncryptionHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableCustomerEncryptionRequest:
    headers: EnableCustomerEncryptionHeaders = field(default=None)
    request: shared.EnableCustomerEncryptionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnableCustomerEncryptionResponse:
    content_type: str = field(default=None)
    customer_data: Optional[shared.CustomerData] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
