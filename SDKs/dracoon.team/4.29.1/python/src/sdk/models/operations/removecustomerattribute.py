from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveCustomerAttributePathParams:
    customer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveCustomerAttributeHeaders:
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token' }})
    

@dataclass
class RemoveCustomerAttributeRequest:
    path_params: RemoveCustomerAttributePathParams = field(default=None)
    headers: RemoveCustomerAttributeHeaders = field(default=None)
    

@dataclass
class RemoveCustomerAttributeResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
