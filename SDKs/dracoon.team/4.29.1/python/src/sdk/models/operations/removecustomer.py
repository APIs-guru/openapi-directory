from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveCustomerPathParams:
    customer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveCustomerHeaders:
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token' }})
    

@dataclass
class RemoveCustomerRequest:
    path_params: RemoveCustomerPathParams = field(default=None)
    headers: RemoveCustomerHeaders = field(default=None)
    

@dataclass
class RemoveCustomerResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
