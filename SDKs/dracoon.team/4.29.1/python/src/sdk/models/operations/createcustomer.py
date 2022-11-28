from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateCustomerHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCustomerRequest:
    headers: CreateCustomerHeaders = field()
    request: shared.NewCustomerRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCustomerResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    new_customer_response: Optional[shared.NewCustomerResponse] = field(default=None)
    create_customer_400_application_json_one_of: Optional[Any] = field(default=None)
    
