from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestCustomerAttributesPathParams:
    customer_id: int = field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestCustomerAttributesQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestCustomerAttributesHeaders:
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestCustomerAttributesRequest:
    headers: RequestCustomerAttributesHeaders = field()
    path_params: RequestCustomerAttributesPathParams = field()
    query_params: RequestCustomerAttributesQueryParams = field()
    

@dataclass
class RequestCustomerAttributesResponse:
    content_type: str = field()
    status_code: int = field()
    attributes_response: Optional[shared.AttributesResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
