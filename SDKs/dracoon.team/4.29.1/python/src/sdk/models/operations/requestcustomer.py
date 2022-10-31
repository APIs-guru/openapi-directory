from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestCustomerPathParams:
    customer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestCustomerQueryParams:
    include_attributes: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_attributes', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestCustomerHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestCustomerRequest:
    path_params: RequestCustomerPathParams = field(default=None)
    query_params: RequestCustomerQueryParams = field(default=None)
    headers: RequestCustomerHeaders = field(default=None)
    

@dataclass
class RequestCustomerResponse:
    content_type: str = field(default=None)
    customer: Optional[shared.Customer] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
