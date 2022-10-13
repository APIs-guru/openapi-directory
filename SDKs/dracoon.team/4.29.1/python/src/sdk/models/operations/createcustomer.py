from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateCustomerHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token' }})
    

@dataclass
class CreateCustomerRequest:
    headers: CreateCustomerHeaders = field(default=None)
    request: shared.NewCustomerRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCustomerResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    new_customer_response: Optional[shared.NewCustomerResponse] = field(default=None)
    status_code: int = field(default=None)
    create_customer_400_application_json_one_of: Optional[Any] = field(default=None)
    
