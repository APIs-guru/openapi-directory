from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateCustomerPathParams:
    customer_id: int = field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomerHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomerRequest:
    headers: UpdateCustomerHeaders = field()
    path_params: UpdateCustomerPathParams = field()
    request: shared.UpdateCustomerRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCustomerResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    update_customer_response: Optional[shared.UpdateCustomerResponse] = field(default=None)
    
