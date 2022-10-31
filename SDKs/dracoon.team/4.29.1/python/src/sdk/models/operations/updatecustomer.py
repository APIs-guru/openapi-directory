from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateCustomerPathParams:
    customer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomerHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomerRequest:
    path_params: UpdateCustomerPathParams = field(default=None)
    headers: UpdateCustomerHeaders = field(default=None)
    request: shared.UpdateCustomerRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCustomerResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    update_customer_response: Optional[shared.UpdateCustomerResponse] = field(default=None)
    
