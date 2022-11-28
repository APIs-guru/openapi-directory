from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SetCustomerAttributesPathParams:
    customer_id: int = field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetCustomerAttributesHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetCustomerAttributesRequest:
    headers: SetCustomerAttributesHeaders = field()
    path_params: SetCustomerAttributesPathParams = field()
    request: shared.CustomerAttributes = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetCustomerAttributesResponse:
    content_type: str = field()
    status_code: int = field()
    customer: Optional[shared.Customer] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
