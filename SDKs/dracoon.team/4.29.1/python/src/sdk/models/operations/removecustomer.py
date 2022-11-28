from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveCustomerPathParams:
    customer_id: int = field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveCustomerHeaders:
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveCustomerRequest:
    headers: RemoveCustomerHeaders = field()
    path_params: RemoveCustomerPathParams = field()
    

@dataclass
class RemoveCustomerResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
