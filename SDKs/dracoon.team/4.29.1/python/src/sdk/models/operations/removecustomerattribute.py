from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveCustomerAttributePathParams:
    customer_id: int = field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveCustomerAttributeHeaders:
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveCustomerAttributeRequest:
    headers: RemoveCustomerAttributeHeaders = field()
    path_params: RemoveCustomerAttributePathParams = field()
    

@dataclass
class RemoveCustomerAttributeResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
