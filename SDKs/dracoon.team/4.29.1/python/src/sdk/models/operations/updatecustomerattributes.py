from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateCustomerAttributesPathParams:
    customer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomerAttributesHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomerAttributesRequest:
    path_params: UpdateCustomerAttributesPathParams = field(default=None)
    headers: UpdateCustomerAttributesHeaders = field(default=None)
    request: shared.CustomerAttributes = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCustomerAttributesResponse:
    content_type: str = field(default=None)
    customer: Optional[shared.Customer] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
